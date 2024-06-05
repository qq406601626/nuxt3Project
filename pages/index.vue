<script setup>
definePageMeta({
  middleware:()=>{
    console.log('xxxxxxxxxxxxxxxxxx')
  }
})
onMounted(()=>{
  console.log('6666')
})
</script>

<template>
<div class="index-container">
  <nuxt-link to="/about">to about</nuxt-link>
</div>
</template>

<style scoped lang="scss">
.index-container{}
</style>
