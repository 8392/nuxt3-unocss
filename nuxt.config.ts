export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt'
  ],

  css: [
    '@unocss/reset/tailwind.css'
  ],

  devtools: {
    enabled: true
  }
})
