import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router already uses the `app` dir; just add MDX extensions
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent browsers from MIME-sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Don't send Referer to external origins
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Deny embedding in iframes
          { key: 'X-Frame-Options', value: 'DENY' },
          // Enable XSS protection
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Permissions Policy
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

const mdxConfig = withMDX({
  // Minimal config for Turbopack compatibility
  // Plugins are handled at runtime by next-mdx-remote/rsc in this project
});

export default mdxConfig(nextConfig);
