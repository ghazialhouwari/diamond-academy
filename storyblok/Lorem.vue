<template>
  <div v-editable="blok" class="text-blue-500">
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
