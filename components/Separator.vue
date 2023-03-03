<script setup lang="ts">
interface Props {
  sm?: boolean;
  md?: boolean;
}
withDefaults(defineProps<Props>(), {
  sm: false,
  md: false,
});
</script>

<template>
  <div
    role="separator"
    aria-orientation="vertical"
    class="siteSeperator"
    :class="{
      'h-4': sm,
      'h-6': md,
    }"
  ></div>
</template>

<style lang="postcss">
.siteSeperator {
  @apply w-px bg-gray-300;
}
</style>
