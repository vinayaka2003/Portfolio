import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router already uses the `app` dir; just add MDX extensions
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.43.178', 'vinay-portfolio.loca.lt', 'blue-rat-74.loca.lt', 'localhost:3000'],
};

const mdxConfig = withMDX({
  // Minimal config for Turbopack compatibility
  // Plugins are handled at runtime by next-mdx-remote/rsc in this project
});

export default mdxConfig(nextConfig);
