<script setup lang="ts">
import type { LocaleObject } from "#i18n";
const { $client } = useNuxtApp();
const runtimeConfig = useRuntimeConfig();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(
    (i) => i.code !== locale.value
  );
});

const { data: users, pending, error } = await $client.user.getUsers.useQuery();
const story = await useAsyncStoryblok("home", {
  version: runtimeConfig.public.storyblokAccessLevel as "draft" | "published",
  language: locale.value,
});
</script>

<template>
  <div>
    <nav class="p-10">
      <span v-for="locale in availableLocales" :key="locale.code">
        <NuxtLink :to="switchLocalePath(locale.code) || ''">{{
          locale.name
        }}</NuxtLink>
      </span>
    </nav>
    <div class="p-10 d-flex">
      <h1 class="text-base">Github</h1>
      <Icon name="uil:github" size="30" />
    </div>
    <div class="p-10">
      <NuxtImg
        provider="storyblok"
        format="webp"
        width="500"
        height="145"
        preload
        src="/f/199737/793x230/dff1e2ed87/hero-image.png"
      />
    </div>
    <div class="p-10">
      {{ $t("diamond-academy") }}
    </div>
    <StoryblokComponent v-if="story" :blok="story.content" />
    <div v-if="pending">Loading...</div>
    <div v-else-if="error?.data?.code">Error: {{ error.data.code }}</div>
    <template v-else>
      <ul class="p-10">
        <li v-for="user in users" :key="user.id">
          {{ user.firstName }} {{ user.lastName }}
        </li>
      </ul>
    </template>
  </div>
</template>
