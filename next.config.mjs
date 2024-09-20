/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**', // Permite todas las rutas desde Cloudinary
          },
        ],
      },
};

export default nextConfig;
