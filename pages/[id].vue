<template>
  <div class="mt-[200px] text-center text-3xl">redirecting you to the {{ data?.long_url }}</div>
</template>

<script setup lang="ts">
import { Database } from "~~/types/supabase";

const params = useRoute().params;
const client = useSupabaseClient<Database>();

const { data } = await useAsyncData("link", async () => {
  const { data } = await client
    .from("links")
    .select("*")
    .eq("key", params.id)
    .single();
  return data;
});

if (data.value?.long_url) {
  useExternalRedirect(data.value?.long_url);
}
</script>

<style scoped></style>
