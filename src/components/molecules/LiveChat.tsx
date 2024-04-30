"use client"

import { useEffect } from 'react';

const LiveChat = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//code.tidio.co/oz4opvjil4gs0erfvygz2pro7qvbv9kq.js';
    script.async = true;

    // Append the script to the body of the document
    document.body.appendChild(script);

    // Clean up the script element on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main></main>
  );
};

export default LiveChat;

