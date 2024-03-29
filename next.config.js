/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.themoviedb.org'
            },
            {
                protocol: 'https',
                hostname: 'image.tmdb.org'
            },
        ]
    }
}

module.exports = nextConfig
