import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "var(--orange)",
        orangehov: "var(--orangehov)",
        blue: "var(--blue)",
        darktext: "var(--darktext)",
        lightblue: "var(--lightblue)",
      },
      backgroundImage: {
        "header-index": "url('/img/hero.jpg')",
        "header-sued": "url('/img/zp-sued-cover.jpg')",
        "header-nord": "url('/img/zp-nord-cover.jpg')",
        "header-europe": "url('/img/zp-europe-cover.png')",
        "header-copetri": "url('/img/copetri-cover.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
