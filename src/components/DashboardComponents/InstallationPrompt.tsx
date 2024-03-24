"use client"
import { useState, useEffect } from "react";
import { CloseSquare } from "iconsax-react";


interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): void;
}

const InstallationPrompt = () => {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      const beforeInstallPromptEvent = event as BeforeInstallPromptEvent;
      setShowInstallPrompt(true);
      setDeferredPrompt(beforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setShowInstallPrompt(false);
      });
    }
  };

  return (
    <main>
      {showInstallPrompt && (
        <div className="fixed bottom-0 left-0 w-full bg-white py-4 shadow-lg z-[99] flex items-end justify-around px-4 md:px-6 xl:px-8">
          <div className="flex flex-col gap-y-1">
            <p className="m-0">Install Wealth Assets App</p>
            <button onClick={handleInstallClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
              Install
            </button> 
          </div>
          <CloseSquare size="30" className="text-red-600 cursor-pointer" variant="Bold" onClick={() => setShowInstallPrompt(false)}/>
        </div>
      )}
    </main>
  );
}

export default InstallationPrompt;
