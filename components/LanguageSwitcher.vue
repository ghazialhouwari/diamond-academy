<script setup lang="ts">
import type { LocaleObject } from "#i18n";
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => locales.value as LocaleObject[]);
</script>

<template>
  <div class="flex items-center">
    <LocalIcon name="Globe" size="20" class="ltr:mr-2 rtl:ml-2" />
    <template v-for="(locale, index) in availableLocales" :key="locale.code">
      <NuxtLink
        :to="switchLocalePath(locale.code) || ''"
        class="siteHeader__locale"
        :class="{
          'font-sans': locale.code === 'en',
          'font-noto': locale.code === 'ar',
        }"
        :disabled="true"
      >
        {{ $t(locale.code) }}
      </NuxtLink>
      <span
        v-if="index < availableLocales.length - 1"
        class="siteSeperator py-2 mx-2"
      ></span>
    </template>
  </div>
</template>

<style lang="postcss">
.siteHeader__locale.router-link-active {
  @apply text-gray-400 pointer-events-none select-none;
}
</style>
