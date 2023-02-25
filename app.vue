<script setup lang="ts">
const { locale } = useI18n();
const dir = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
</script>

<template>
  <NuxtLayout>
    <Html :lang="locale" :dir="dir"></Html>
    <NuxtPage />
  </NuxtLayout>
</template>
