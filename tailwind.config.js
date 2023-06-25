/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                rifle: "#46433A",
                offwhite: "#E5E5E5",
                tan: "#D3BC8E",
                alabaster: "#F0EBE1",
                "antique-brass": "#D19D78",
                "police-blue": "#424f65",
                "dark-vanilla": "#cdbba5",
                olivine: "#A7B982",
            },
        },
        fontFamily: {
            sans: [
                "Inter var, sans-serif",
                {
                    fontFeatureSettings: '"cv11", "ss01"',
                    fontVariationSettings: '"opsz" 32',
                },
            ],
        },
    },
    plugins: [],
};
