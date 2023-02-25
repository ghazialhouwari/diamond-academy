<script setup lang="ts">
interface Menu {
  name: string;
  link: string;
}
const { locale } = useI18n();

const menu = computed((): Menu[] => [
  {
    name: "home",
    link: locale.value === "en" ? "/" : `/${locale.value}`,
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "blog",
    link: "/blog",
  },
  {
    name: "events",
    link: "/events",
  },
  {
    name: "help",
    link: "/faqs",
  },
  {
    name: "contact",
    link: "/contact",
  },
]);
</script>

<template>
  <ul class="flex flex-col md:flex-row list-none">
    <li v-for="item in menu" :key="item.link" class="siteHeader__navItem">
      <NuxtLink class="siteHeader__navLink" :to="item.link">{{
        $t(item.name)
      }}</NuxtLink>
    </li>
  </ul>
</template>

<style lang="postcss">
.siteHeader__navLink {
  @apply px-3 py-4 md:py-2;
}
.siteHeader__navLink.router-link-exact-active {
  @apply text-primary;
}
</style>
