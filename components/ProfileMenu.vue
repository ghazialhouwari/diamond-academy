<script setup lang="ts">
import { useDetectOutsideClick } from "@/composable/detectOutsideClick";
interface Menu {
  name: string;
  link: string;
  icon: string;
  iconWidth?: number;
}

const profileMenu = ref<HTMLElement>();

useDetectOutsideClick(profileMenu, () => {
  if (showAccountMenu.value) toggleAccountMenu();
});

const menu = computed((): Menu[] => [
  {
    name: "my-students",
    link: "/my-students",
    icon: "Users",
    iconWidth: 30,
  },
  {
    name: "my-data",
    link: "/my-data",
    icon: "User",
    iconWidth: 30,
  },
  {
    name: "security",
    link: "/security",
    icon: "Security",
    iconWidth: 30,
  },
  {
    name: "logout",
    link: "/logout",
    icon: "Logout",
    iconWidth: 30,
  },
]);

const showAccountMenu = ref(false);

const toggleAccountMenu = () => {
  showAccountMenu.value = !showAccountMenu.value;
};
</script>

<template>
  <div ref="profileMenu" class="siteHeader__profile relative">
    <div
      role="button"
      id="myAccountBtn"
      area-lable="My Account"
      :aria-expanded="showAccountMenu"
      aria-controls="profileMenu"
      class="flex items-center cursor-pointer"
      tabindex="0"
      @click="toggleAccountMenu"
      @keyup.space="toggleAccountMenu"
    >
      <div class="flex flex-col items-center">
        <span>{{ $t("my-account") }}</span>
        <span class="text-xs font-light text-gray-500 whitespace-nowrap"
          >{{ $t("login") }} / {{ $t("register") }}</span
        >
      </div>
      <Icon name="mdi:chevron-down" size="20" class="ltr:ml-2 rtl:mr-2" />
    </div>
    <div
      ref="profileMenu"
      aria-labelledby="myAccountBtn"
      class="profileMenu"
      :class="{ hidden: !showAccountMenu }"
    >
      <ul class="profileMenu__card">
        <li
          v-for="(item, index) in menu"
          :key="item.link"
          class="profileMenu__item"
        >
          <NuxtLink
            class="profileMenu__link whitespace-nowrap"
            :to="item.link"
            :class="{ 'profileMenu__link--last': index === menu.length - 1 }"
          >
            <LocalIcon
              :name="item.icon"
              :width="item.iconWidth"
              size="20"
              class="ltr:mr-3 rtl:ml-3"
            />
            <span>{{ $t(item.name) }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="postcss">
.profileMenu {
  @apply absolute top-full ltr:right-0 rtl:left-0 pt-5;
}
.profileMenu__card {
  @apply bg-white shadow-lg rounded py-2 border border-gray-200;
  min-width: 200px;
}
.profileMenu__link {
  @apply relative flex items-center px-6 py-3 hover:text-primary transition-colors duration-100;
}
.profileMenu__link:not(.profileMenu__link--last):after {
  content: "";
  @apply absolute bottom-0 left-0 right-0 h-px w-4/5 mx-auto bg-gray-300;
}
</style>
