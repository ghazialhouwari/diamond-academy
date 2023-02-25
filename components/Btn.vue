<script setup lang="ts">
interface Props {
  title: string;
  outline?: boolean;
  block?: boolean;
  lg?: boolean;
  roundedFull?: boolean;
}

withDefaults(defineProps<Props>(), {
  outline: false,
  block: false,
  lg: false,
  roundedFull: true,
});
</script>

<template>
  <button
    :title="title"
    :class="{
      'bg-primary text-white': !outline,
      'border border-primary text-primary': outline,
      'w-full': block,
      'py-2 px-6': lg,
      'rounded-full': roundedFull,
    }"
  >
    {{ title }}
  </button>
</template>
