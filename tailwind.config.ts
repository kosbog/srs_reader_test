import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      boxShadow: {
        'modal': '0px 8px 28px 6px #0000001f',
        'modal_mobile': '0px -8px 40px -4px #2A2C324D',
      },
      padding:{
        32: '8rem',
        36: '9rem',
      },
      textColor: {
        'light-icon': '#BBBEC2',
        'light-text': '#ECEDEF',
        'light-helper': '#D9D9D9',
        'light-helper-1': '#71747A',
        'dark-icon': '#424957',
        'button-text': '#171A1F',
        'button-text-1': '#E1E3E6',
      },
      backgroundColor: {
        'dark-primary': '#000000',
        'dark-secondary': '#19191A',
        'dark-secondary-2': '#853D61',
        'dark-button': '#363636',
        'dark-button-1': '#8E3F66',
        'dark-button-2': '#83325A',
        'light-button': '#F2F3F5',
        'light-switcher': '#D5D5D6',
      },
      maxWidth: {
        "900": "900px",
        "380": "380px",
        "90": "90px",
      },
      width: { "214": "214px" },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        roboto_mono: ['var(--font-roboto-mono)'],
        pt_serif: ['var(--font-pt-serif)'],
        shantell_sans: ['var(--font-shantell-sans)'],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
