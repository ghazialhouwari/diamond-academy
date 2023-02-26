<script setup lang="ts">
const showSideMenu = ref(false);

const toggleSideMenu = () => {
  showSideMenu.value = !showSideMenu.value;
};
</script>

<template>
  <Header @toggleSideMenu="toggleSideMenu" />
  <SideMenu :showSideMenu="showSideMenu" @toggleSideMenu="toggleSideMenu" />
  <slot />
</template>
