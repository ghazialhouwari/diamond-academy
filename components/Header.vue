<script setup lang="ts">
defineEmits(["toggleSideMenu"]);
const { locale } = useI18n();
</script>

<template>
  <nav class="siteHeader" aria-label="Main navigation">
    <div class="container flex items-center justify-between">
      <NuxtLink
        :to="locale === 'en' ? '/' : `/${locale}`"
        :aria-label="
          $t('object', { name: $t('diamond-academy'), object: $t('logo') })
        "
      >
        <NuxtImg
          class="siteHeader__logo"
          :alt="
            $t('object', { name: $t('diamond-academy'), object: $t('logo') })
          "
          target="static"
          src="/images/diamond-academy-logo.svg"
          width="170"
          height="70"
        />
      </NuxtLink>
      <div class="flex items-center">
        <NavMenu class="hidden lg:flex" />
        <span
          role="separator"
          aria-orientation="vertical"
          class="w-px bg-gray-300 hidden lg:flex py-3 ltr:ml-3 rtl:ml-6 ltr:mr-6 rtl:mr-3"
        ></span>
        <LanguageSwitcher />
        <span
          role="separator"
          aria-orientation="vertical"
          class="hidden sm:flex siteSeperator py-3 mx-6"
        ></span>
        <ProfileMenu class="hidden sm:flex" />
        <span class="mx-3 hidden sm:flex"></span>
        <LocalIcon
          role="button"
          name="Menu"
          size="30"
          class="cursor-pointer"
          title="Open mobile navigation"
          tabindex="0"
          @click="$emit('toggleSideMenu')"
          @keyup.space="$emit('toggleSideMenu')"
        />
      </div>
    </div>
  </nav>
</template>

<style lang="postcss">
.siteHeader {
  @apply sticky top-0 left-0 z-30 w-full py-3 bg-white;
}
.siteHeader__logo {
  max-width: 170px;
}
</style>
