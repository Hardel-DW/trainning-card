/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{tsx,ts,js,jsx}', './src/components/**/*.{tsx,ts,js,jsx}'],
    theme: {
        extend: {
            colors: {
                'light-gray': '#dedddf',
                'dark-gray': '#8e8593',
                'dark-violet': '#21092f'
            },
            backgroundImage: {
                'hero-violet': "url('/images/bg-main-desktop.png')"
            }
        }
    },
    plugins: []
};
