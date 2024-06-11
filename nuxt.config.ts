// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite:{
    css:{
      preprocessorOptions:{
        scss:{}
      }
    }
  },
  devServer:{
    port:3001
  },
  modules:[]
})
