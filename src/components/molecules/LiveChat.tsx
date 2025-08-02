'use client';

import { useEffect } from 'react';

export default function LiveChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src   = 'https://code.jivosite.com/widget/VxcXFnXdTB';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
