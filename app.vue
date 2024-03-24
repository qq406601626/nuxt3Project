<script setup>
const appConfig = useAppConfig()
console.log('appConfig',appConfig.title)
</script>
<template>
  <NuxtLayout>
    <nuxt-page></nuxt-page>
  </NuxtLayout>
</template>
