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
  const [isAppleDevice, setIsAppleDevice] = useState(false);

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

  useEffect(() => {
    setIsAppleDevice(/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
    console.log(navigator.platform)
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
            <p className="m-0">{isAppleDevice ? 'To install the Wealth Assets App, follow these steps:' : 'Install Wealth Assets App'}</p>
            {isAppleDevice ? (
              <ol className="list-decimal pl-4">
                <li>Tap the <strong className="text-primary">Share</strong> icon at the bottom center of the screen.</li>
                <li>Scroll down and select <strong className="text-primary">Add to Home Screen</strong>.</li>
                <li>Then tap <strong className="text-primary">Add</strong>.</li>
              </ol>
            ) : (
              <button onClick={handleInstallClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
                Install
              </button>
            )}
          </div>
          <CloseSquare size="30" className="text-red-600 cursor-pointer" variant="Bold" onClick={() => setShowInstallPrompt(false)} />
        </div>
      )}
    </main>
  );
}

export default InstallationPrompt;
