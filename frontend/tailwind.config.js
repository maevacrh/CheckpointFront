// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat Alternates"],  
            },
            fontWeight: {
                thin: "100",
                hairline: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                black: "900",
                extrablack: "1000",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        default: {
                            DEFAULT: "#",
                            foreground: "##568EA3",
                        },
                        primary: {
                            DEFAULT: "#F4A261",
                            foreground: "#000000",
                        },
                        secondary: {
                            DEFAULT: "##68C3D4",
                            foreground: "#000000",
                        },
                        success: {
                            DEFAULT: "#2A9D8F",
                            foreground: "#000000",
                        },
                        danger: {
                            DEFAULT: "##826251",
                            foreground: "#000000",
                        },
                    },
                },
            },
        }),
    ],
};

export default config;
