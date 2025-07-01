/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                white: '#ffffff',
                purple: '#d02fe1',
                pinkGradient: '',
                //             background-image: linear-gradient(35deg, #d200ff, #e7134f);
                // background-size: 100%;
                // -webkit-background-clip: text;
                // -moz-background-clip: text;
                // -webkit-text-fill-color: transparent;
            },
            backgrounds: {},
        },
    },

    plugins: [],
};
