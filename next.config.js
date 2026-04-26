/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Admin subdomain rewrite: administration.domain.com → /admin
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'administration.swamivivekanandmahavidyalaya.edu.in' }],
          destination: '/admin/:path*',
        },
        // Local dev admin subdomain
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'administration.localhost:3000' }],
          destination: '/admin/:path*',
        },
      ],
    };
  },
};

module.exports = nextConfig;
