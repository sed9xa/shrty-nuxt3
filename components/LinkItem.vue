<template>
  <div class="card flex items-center justify-between mb-4">
    <div class="link-info">
      <div class="text-amber-500 font-bold text-2xl">{{ link.shortKey }}</div>
      <div class="text-sm text-white/20">
        {{ link.longUrl.slice(0, 20) + "..." }}
      </div>
    </div>
    <div class="buttons flex gap-2">
      <button
        @click="deleteLink"
        class="btn-primary w-12 h-12 grid place-content-center rounded-full"
      >
        Delete
      </button>
      <button
        @click="handleCopy"
        class="btn-primary w-12 h-12 grid place-content-center rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Database } from "~~/types/supabase";

const client = useSupabaseClient<Database>();
const config = useRuntimeConfig();
const emit = defineEmits(["onLinkDeleted"]);
const user = useSupabaseUser();

const props = defineProps<{
  link: {
    shortKey: string;
    longUrl: string;
    id: number;
  };
}>();

const deleteLink = async () => {
  const { data, error } = await client
    .from("links")
    .delete()
    .eq("id", props.link.id);
  emit("onLinkDeleted");
  console.log(data, error);
};

const handleCopy = () => {
  console.log(navigator);
  navigator.clipboard.writeText(
    `${config.public.appUrl}/${props.link.shortKey}`
  );
  alert("Link copied to clipboard");
};
</script>

<style scoped></style>
