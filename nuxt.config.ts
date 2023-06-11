export default defineNuxtConfig({
  app: {
    head: {
      title: "Grey Software Identity",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "favicon.ico",
          media: "(prefers-color-scheme: light)",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "favicon-dark.ico",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "og:title",
          content: "Grey Software | Open Products, Open Education!",
        },

        {
          name: "og:description",
          content:
            "Grey Software is developing open products and sharing what we learn along the way!",
        },

        {
          name: "og:image",
          content: "/preview.png",
        },
      ],
      script: [{ src: "https://unpkg.com/netlify-auth-providers" }],
    },
  },
  ssr: false,
  css: ["~/assets/main.css"],
  modules: [
    "nuxt-font-loader",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@unocss/nuxt",
    "@nuxt/content",
    "nuxt-snackbar",
  ],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    classSuffix: "",
  },
  fontLoader: {
    // local: [
    // ],
    external: [
      {
        src: "https://fonts.googleapis.com/css2?family=Inter:wght@100;@200;@300;@400;@500;@600;@700;@800&display=swap",
        family: "Inter",
      },
    ],
  },
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
});
