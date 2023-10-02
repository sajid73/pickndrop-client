/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["dummyimage.com", "i.ibb.co"],
        formats: ["image/avif", "image/webp"]
    }
}

module.exports = nextConfig
