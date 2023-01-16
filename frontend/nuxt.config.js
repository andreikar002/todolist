// https://nuxt.com/docs/api/configuration/nuxt-config
// require('dotenv').config()
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  buildModules: ["@nuxtjs/tailwindcss", "@nuxt/postcss8"],
  tailwindcss: {
    exposeConfig: false,
    viewer: false,
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.API_URL,
    },
  },
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/fonts/fontello/css/fontello.css",
  ],
});
