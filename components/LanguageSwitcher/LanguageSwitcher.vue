<script setup lang="ts">
import type { LocaleObject } from "#i18n";
const { locale: activeLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => locales.value as LocaleObject[]);
</script>

<template>
  <div class="flex items-center">
    <LocalIcon
      name="Globe"
      size="20"
      class="hidden sm:block ltr:mr-2 rtl:ml-2"
    />
    <template v-for="(locale, index) in availableLocales" :key="locale.code">
      <NuxtLink
        :to="switchLocalePath(locale.code) || ''"
        class="siteHeader__locale"
        :class="{
          'font-sans': locale.code === 'en',
          'font-noto': locale.code === 'ar',
          'hidden sm:block': activeLocale === locale.code,
        }"
        :tabindex="activeLocale === locale.code ? -1 : 0"
        :disabled="activeLocale === locale.code"
      >
        {{ $t(locale.code) }}
      </NuxtLink>
      <Separator
        v-if="index < availableLocales.length - 1"
        :sm="true"
        class="mx-2 hidden sm:block"
      />
    </template>
  </div>
</template>

<style lang="postcss">
.siteHeader__locale.router-link-active {
  @apply text-gray-500 pointer-events-none select-none;
}
</style>
