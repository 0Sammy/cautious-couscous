"use client"

import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";

// Import Needed Actions
import { saveUserChoice, getUserChoice } from "@/actions/serverActions/cancelPrompt";

// Import Needed Icons
import { AddSquare, CloseSquare, DirectSend } from "iconsax-react";

type BeforeInstallPromptEvent = Event & {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): void;
}

const InstallationPrompt = () => {

  const [showInstallPrompt, setShowInstallPrompt] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isAppleDevice, setIsAppleDevice] = useState<boolean>(false);

  const handleBeforeInstallPrompt = useCallback((event: Event) => {
    event.preventDefault();
    setDeferredPrompt(event as BeforeInstallPromptEvent);
    setShowInstallPrompt(true);
  }, []);

  useEffect(() => {
    const usersChoice = async () => {
      const choice = await getUserChoice();
      setShowInstallPrompt(!choice.isCanceled);
    };
    usersChoice();
  }, []);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, [handleBeforeInstallPrompt]);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsAppleDevice(/ipad|iphone|ipod/.test(userAgent));
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'accepted') {
        toast.success("Installing Wealth Assets.");
      } else {
        toast.warning("This prompt will not reappear for 7 days.");
      }
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleCloseClick = async () => {
    const { success } = await saveUserChoice();
    if (success) {
      setShowInstallPrompt(false);
      toast.warning("This prompt will not reappear for 7 days.");
    }
  };

  return (
    <main className="text-[10px] md:text-xs xl:text-sm">
      {showInstallPrompt && (
        <div className="fixed bottom-0 left-0 w-full bg-white py-4 shadow-lg z-[99] flex items-end justify-around px-4 md:px-6 xl:px-8">
          <div className="flex flex-col gap-y-1">
            <p className="m-0">Install Wealth Assets App</p>
            <button onClick={handleInstallClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
              Install
            </button>
          </div>
          <CloseSquare size="30" className="text-red-600 cursor-pointer" variant="Bold" onClick={handleCloseClick} />
        </div>
      )}
      {showInstallPrompt && isAppleDevice && (
        <div className="fixed bottom-0 left-0 w-full bg-white py-4 shadow-lg z-[99] flex items-end justify-around px-4 md:px-6 xl:px-8">
          <div className="flex flex-col gap-y-1">
            <p>To install the Wealth Assets App in Your iOS Device, follow these steps:</p>
            <ul className="pl-2 flex flex-col gap-y-2">
              <li className="flex items-center">Tap the <strong className="mx-[2px] text-primary flex items-center">Share<DirectSend size="18" className="mx-[2px]" /></strong> icon at the bottom center of the screen.</li>
              <li>Scroll down and select <strong className="text-primary">Add to Home Screen</strong>.</li>
              <li className="flex items-center">Then tap <strong className="mx-[2px] text-primary flex items-center">Add<AddSquare size="18 " className="mx-[2px]" /></strong>.</li>
            </ul>
          </div>
          <CloseSquare size="30" className="text-red-600 cursor-pointer" variant="Bold" onClick={handleCloseClick} />
        </div>
      )}
    </main>
  );
}

export default InstallationPrompt;
