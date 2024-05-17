// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@use "@/assets/style/test.scss" as *;'
        }
      }
    }
  },
  devServer:{
    port:3001
  },
  modules:[
    async (inlineOptions, nuxt) => {
      console.log('this is test module config')
    }
  ]
})
