/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = () => {
    const rewrites = () => {
        return [
            {
                source: "/api/uid/:uid",
                destination:
                    "https://rails-express.vercel.app/sr_info_parsed/:uid?version=v2&lang=en",
            },
        ];
    };
    return {
        rewrites,
    };
};
