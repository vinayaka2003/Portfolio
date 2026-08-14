export default function manifest() {
  return {
    name: 'Vinayaka S | Portfolio',
    short_name: 'Vinayaka',
    description: 'Software developer interested in AI, automation, and modern web technologies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070a13',
    theme_color: '#10b981',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
