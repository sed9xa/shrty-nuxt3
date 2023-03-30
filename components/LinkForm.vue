<template>
  <div class="card">
    <form @submit.prevent="handleLinkForm">
      <div class="flex gap-5 items-end">
        <div class="w-5/12">
          <label for="long_url">Long URL</label>
          <input v-model="form.long_url" id="long_url" type="text" />
        </div>
        <div class="w-5/12">
          <label for="key">Short key</label>
          <input v-model="form.key" id="key" type="text" />
        </div>
        <div class="w-2/12">
          <button class="btn-primary py-3 rounded-lg w-full">Short</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import { Database } from "types/supabase";

const emit = defineEmits(["onLinkCreated"]);

const client = useSupabaseClient<Database>();
const user = useSupabaseUser();

const form = reactive({
  long_url: "",
  key: "",
});

const handleLinkForm = async () => {
  try {
    const { data, error } = await client.from("links").insert({
      long_url: form.long_url,
      key: form.key,
      user_id: user.value?.id,
    });
    if (error) {
      console.error(error.message);
      return;
    }

    createShortkey();
    form.long_url = "";
    emit("onLinkCreated", 1);
  } catch (error) {}
};

const createShortkey = (len: number = 6): void => {
  form.key = nanoid(len);
};

onMounted(() => {
  form.key = nanoid(6);
});
</script>

<style scoped></style>
