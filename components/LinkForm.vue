<template>
  <div class="card">
    <form>
      <div class="flex gap-5 items-end">
        <div class="w-5/12">
          <label for="url">Long URL</label>
          <input id="url" type="text" />
        </div>
        <div class="w-5/12">
          <label for="shortKey">Short key</label>
          <input id="shortKey" type="text" />
        </div>
        <div class="w-2/12">
          <button class="btn-primary py-3 rounded-lg w-full">Short</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
