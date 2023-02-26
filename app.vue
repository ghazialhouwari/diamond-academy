<script setup lang="ts">
const { locale } = useI18n();
const dir = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));
</script>

<template>
  <NuxtLayout>
    <Html :lang="locale" :dir="dir">
      <Head>
        <Title>{{ $t("diamond-academy") }}</Title>
        <Meta name="description" :content="$t('diamond-academy-summery')" />
      </Head>
    </Html>
    <NuxtPage />
  </NuxtLayout>
</template>
