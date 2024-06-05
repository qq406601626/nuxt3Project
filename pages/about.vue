<script setup>
// definePageMeta({
//   middleware: 'auth'
// })
// useHead({
//   title:'about'
// })
definePageMeta({
  middleware:()=>{
    console.log('this is about page middleware')
  }
})
</script>

<template>
  <div>this is about page</div>
  <nuxt-link to="/">to index page</nuxt-link>
</template>

<style scoped>

</style>
