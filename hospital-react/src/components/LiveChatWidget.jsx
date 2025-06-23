import { useEffect } from 'react';

export default function LiveChatWidget() {
  useEffect(() => {
    if (window.Tawk_API) return; // Prevent multiple injections
    var s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/64e4e7b094cf5d49dc6b7b7b/1h8jv7v7g'; // Demo/public property
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    document.body.appendChild(s1);
  }, []);
  return null;
} 