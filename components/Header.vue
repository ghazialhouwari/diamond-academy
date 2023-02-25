<script setup lang="ts">
defineEmits(["toggleSideMenu"]);
</script>

<template>
  <nav class="siteHeader">
    <div class="container flex items-center justify-between">
      <NuxtLink to="/">
        <img
          class="siteHeader__logo"
          alt="Diamond Academy"
          src="/images/diamond-academy-logo.svg"
        />
      </NuxtLink>
      <div class="flex items-center">
        <NavMenu class="hidden lg:flex" />
        <span
          class="w-px bg-gray-300 hidden lg:flex py-3 ltr:ml-3 rtl:ml-6 ltr:mr-6 rtl:mr-3"
        ></span>
        <LanguageSwitcher />
        <span class="hidden sm:flex siteSeperator py-3 mx-6"></span>
        <ProfileMenu class="hidden sm:flex" />
        <span class="mx-3 hidden sm:flex"></span>
        <LocalIcon
          name="Menu"
          size="30"
          class="cursor-pointer"
          @click="$emit('toggleSideMenu')"
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
