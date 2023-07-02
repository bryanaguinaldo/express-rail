/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/uid/:uid",
                destination:
                    "https://www.rails-express.com/sr_info_parsed/:uid?version=v2&lang=en",
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname: "/Mar-7th/StarRailRes/master/**",
            },
        ],
    },
};

return (module.exports = nextConfig);

// module.exports = () => {
//     const rewrites = () => {
//         return [
//             {
//                 source: "/api/uid/:uid",
//                 destination:
//                     "https://rails-express.vercel.app/sr_info_parsed/:uid?version=v2&lang=en",
//             },
//         ];
//     };
//     return {
//         rewrites,
//     };
// };
