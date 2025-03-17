/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Enable static exports
    images: {
      unoptimized: true,  // Required for static export
    },
    // If you need to set a base path for GitHub Pages (e.g., username.github.io/repo-name)
    // If this is for username.github.io, you don't need basePath
    // basePath: '/repo-name',
  }
  
  module.exports = nextConfig