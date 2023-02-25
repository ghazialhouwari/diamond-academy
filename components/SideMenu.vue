<script setup lang="ts">
defineEmits(["toggleSideMenu"]);
</script>

<template>
  <div class="sideMenu">
    <div class="sideMenu__overlay" @click="$emit('toggleSideMenu')"></div>
    <div class="sideMenu__content">
      <NuxtImg
        class="siteMenu__logo mb-6"
        alt="Diamond Academy"
        src="/images/diamond-academy-logo.svg"
      />
      <p>{{ $t("academy-summery") }}</p>
      <div class="h-px w-full bg-gray-300 my-8"></div>
      <div class="mb-12">
        <div class="flex items-center mb-3">
          <Icon name="mdi:at" size="20" class="ltr:mr-3 rtl:ml-3" />
          <span class="font-sans">info@diamondacademy.com</span>
        </div>
        <div class="flex items-center mb-3">
          <LocalIcon name="Phone" size="20" class="ltr:mr-3 rtl:ml-3" />
          <span class="font-sans">+962 7 7547 3486</span>
        </div>
        <div class="flex items-center mb-3">
          <Icon name="mdi:map-marker" size="20" class="ltr:mr-3 rtl:ml-3" />
          <span class="font-sans">Az Zarqa' - Red Palace Swimming Pool</span>
        </div>
        <div class="flex items-center mb-3">
          <LocalIcon name="Open" size="20" class="ltr:mr-3 rtl:ml-3" />
          <span class="font-sans">Everyday: 8:00 - 22:00</span>
        </div>
      </div>
      <div>
        <Btn
          :title="$t('login')"
          :block="true"
          :lg="true"
          :outline="true"
          class="mb-2"
        />
        <Btn :title="$t('signup')" :block="true" :lg="true" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
.sideMenu {
  @apply fixed top-0 ltr:right-0 rtl:left-0 h-full w-full z-50;
}
.sideMenu__overlay {
  @apply absolute top-0 left-0 w-full h-full bg-white opacity-40 z-10;
}
.sideMenu__content {
  @apply absolute top-0 ltr:right-0 rtl:left-0 h-full w-96 max-w-full bg-white shadow-lg p-12 z-20;
}
.siteMenu__logo {
  max-width: 200px;
}
</style>
