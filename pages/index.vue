<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
useHead({
  title:'index'
})
</script>

<template>
<div class="index-container">
  this is index page
</div>
 <nuxt-link to="/about">to about page</nuxt-link>
</template>

<style scoped lang="scss">
.index-container{}
</style>