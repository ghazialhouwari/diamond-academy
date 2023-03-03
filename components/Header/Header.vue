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
        data-test-id="header-logo"
      >
        <Logo class="siteHeader__logo" />
      </NuxtLink>
      <div class="flex items-center">
        <NavMenu class="hidden lg:flex" />
        <Separator
          :md="true"
          class="hidden lg:flex ltr:ml-3 rtl:ml-6 ltr:mr-6 rtl:mr-3"
        />
        <LanguageSwitcher />
        <Separator :md="true" class="hidden sm:flex mx-6" />
        <ProfileMenu class="hidden sm:flex" />
        <div class="mx-3 flex"></div>
        <button
          title="Open mobile navigation"
          @click="$emit('toggleSideMenu')"
          @keyup.space="$emit('toggleSideMenu')"
        >
          <LocalIcon name="Menu" size="30" />
        </button>
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
