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

const {
  data: hello,
  pending,
  error,
} = await $client.user.hello.useQuery({ text: "client" });
const story = await useAsyncStoryblok("home", {
  version: runtimeConfig.public.storyblokAccessLevel as "draft" | "published",
});
</script>

<template>
  <div>
    <nav>
      <span v-for="locale in availableLocales" :key="locale.code">
        <NuxtLink :to="switchLocalePath(locale.code) || ''">{{
          locale.name
        }}</NuxtLink>
      </span>
    </nav>
    {{ $t("diamond-academy") }}
    <StoryblokComponent v-if="story" :blok="story.content" />
    <div v-if="pending">Loading...</div>
    <div v-else-if="error?.data?.code">Error: {{ error.data.code }}</div>
    <div v-else>
      <p>{{ hello?.greeting }}</p>
    </div>
  </div>
</template>
