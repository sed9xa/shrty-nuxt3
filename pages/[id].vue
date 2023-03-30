<template>
  <div class="mt-[200px]">
    {{ params }}
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import { Database } from "~~/types/supabase";

const params = useRoute().params;
const client = useSupabaseClient<Database>();

const { data } = await useAsyncData("link", async () => {
  const { data } = await client.from("links").select("*").eq("key", params.id).single();
  console.log(data?.long_url);
  return data;
});

</script>

<style scoped></style>
