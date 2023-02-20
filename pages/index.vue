<script setup lang="ts">
const { $client } = useNuxtApp();

const {
  data: hello,
  pending,
  error,
} = await $client.user.hello.useQuery({ text: "client" });
</script>

<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error?.data?.code">Error: {{ error.data.code }}</div>
    <div v-else>
      <p>{{ hello?.greeting }}</p>
    </div>
  </div>
</template>
