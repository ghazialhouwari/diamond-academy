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
      <div class="hidden md:flex items-center">
        <NavMenu />
        <span
          class="siteSeperator py-3 ltr:ml-3 rtl:ml-6 ltr:mr-6 rtl:mr-3"
        ></span>
        <LanguageSwitcher />
        <span class="siteSeperator py-3 mx-6"></span>
        <ProfileMenu />
        <span class="mx-3"></span>
        <LocalIcon name="Menu" size="30" />
      </div>
    </div>
  </nav>
</template>

<style lang="postcss">
.siteHeader {
  @apply sticky top-0 left-0 z-50 w-full py-3 bg-white;
}
.siteHeader__logo {
  max-width: 170px;
}
</style>
