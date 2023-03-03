<template>
  <div class="siteHero">
    <h1 data-test-id="hero-heading" class="text-5xl">
      {{ $t("diamond-academy") }}
    </h1>
  </div>
</template>

<style lang="postcss">
.siteHero {
  @apply bg-primary text-white flex justify-center items-center;
  height: calc(100vh - 95px);
  min-height: 650px;
  max-height: 1000px;
}
</style>
