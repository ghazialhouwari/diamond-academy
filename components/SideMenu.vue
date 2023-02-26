<script setup lang="ts">
interface Props {
  showSideMenu: boolean;
}

defineProps<Props>();
defineEmits(["toggleSideMenu"]);
</script>

<template>
  <div class="sideMenu" :class="{ hidden: !showSideMenu }">
    <div class="sideMenu__overlay" @click="$emit('toggleSideMenu')"></div>
    <div class="sideMenu__content">
      <NuxtImg
        class="siteMenu__logo mb-6"
        :alt="$t('object', { name: $t('diamond-academy'), object: $t('logo') })"
        src="/images/diamond-academy-logo.svg"
        width="200"
        height="83"
      />
      <p>{{ $t("diamond-academy-summery") }}</p>
      <div class="h-px w-full bg-gray-300 my-8"></div>
      <ul class="mb-12" title="Our contact info">
        <li class="flex items-center mb-3">
          <Icon name="mdi:at" size="20" class="ltr:mr-3 rtl:ml-3" />
          <a
            href="mailto:info@diamondacademy.com?subject=Mail from Our Site"
            :tabindex="showSideMenu ? 0 : -1"
            aria-label="Email us"
            class="font-sans"
            target="_blank"
            rel="noopener noreference"
            >info@diamondacademy.com</a
          >
        </li>
        <li class="flex items-center mb-3">
          <LocalIcon name="Phone" size="20" class="ltr:mr-3 rtl:ml-3" />
          <a
            href="tel:00962775473486"
            :tabindex="showSideMenu ? 0 : -1"
            class="font-sans"
            aria-label="Call Us"
            target="_blank"
            rel="noopener noreference"
            >+962 7 7547 3486</a
          >
        </li>
        <li class="flex items-center mb-3">
          <Icon name="mdi:map-marker" size="20" class="ltr:mr-3 rtl:ml-3" />
          <a
            href="https://goo.gl/maps/vUrTPVTdgvmoFV619"
            :tabindex="showSideMenu ? 0 : -1"
            target="_blank"
            rel="noopener noreference"
            aria-label="Our location"
            class="font-sans"
            >Az Zarqa' - Red Palace Swimming Pool</a
          >
        </li>
        <li class="flex items-center mb-3">
          <LocalIcon name="Open" size="20" class="ltr:mr-3 rtl:ml-3" />
          <span class="font-sans" aria-label="Open hours"
            >Everyday: 8:00 - 22:00</span
          >
        </li>
      </ul>
      <div>
        <Btn
          :title="$t('login')"
          :block="true"
          :lg="true"
          :outline="true"
          :tabindex="showSideMenu ? 0 : -1"
          class="mb-2"
        />
        <Btn
          :title="$t('signup')"
          :block="true"
          :lg="true"
          :tabindex="showSideMenu ? 0 : -1"
        />
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
