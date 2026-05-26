'use client';

import { useEffect } from 'react';

export default function BlogLayout({ children }) {
  // Ensure dark mode class is applied if needed, though next-themes usually handles this
  useEffect(() => {
    // Optional: add any blog-specific initialization here
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/10 transition-colors duration-500">
      {children}
    </div>
  );
}
