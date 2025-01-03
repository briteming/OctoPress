/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.imgur.com', 'pbs.twimg.com', 'socialify.git.ci'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default nextConfig;
