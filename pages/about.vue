<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
useHead({
  title:'about'
})
</script>

<template>
  <div>this is about page</div>
  <nuxt-link to="/">to index page</nuxt-link>
</template>

<style scoped>

</style>