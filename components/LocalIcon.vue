<script setup lang="ts">
interface Props {
  size?: number | string;
  name: string;
  width?: number | string;
  height?: number | string;
}
const props = withDefaults(defineProps<Props>(), {
  size: 20,
});
</script>

<template>
  <component
    :is="`Icon${props.name}`"
    :size="size"
    :width="width"
    :height="height"
  />
</template>
