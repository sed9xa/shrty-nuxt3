<template>
  <main class="pt-24">
    <section class="container">
      <h1 class="text-2xl font-bold text-white">Dashboard</h1>
    </section>
    <section class="container mt-10">
      <LinkForm @onLinkCreated="refresh" />
    </section>
    <section class="container mt-10">
      <LinkItem
      @onLinkDeleted="refresh"
        v-for="link in data"
        :link="{
          shortKey: link.key,
          longUrl: link.long_url,
          id: link.id,
        }"
      />

    
    </section>
  </main>
</template>

<script setup lang="ts">
import { Database } from "~~/types/supabase";
definePageMeta({ middleware: "auth" });

const client = useSupabaseClient<Database>();
const user = useSupabaseUser();

const { data, refresh } = useAsyncData("links", async () => {
  const { data, error } = await client
    .from("links")
    .select("*")
    .eq("user_id", user.value?.id);

  return data;
});
console.log(data);
</script>

<style scoped></style>
