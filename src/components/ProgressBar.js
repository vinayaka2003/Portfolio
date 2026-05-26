'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      setScroll(scrolled);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-primary-light/20 dark:bg-primary-dark/20 w-full z-50 pointer-events-none">
      <div
        className="h-full bg-primary-light dark:bg-primary-dark transition-all duration-150 ease-out"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
}
