/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
    experimental: {
        serverActions: true,
    },
}

module.exports = withVideos(nextConfig)
