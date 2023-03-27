<template>
  <main class="pt-24">
    <section class="container">
      <h1 class="text-2xl font-bold text-white">Dashboard</h1>
    </section>
    <section class="container mt-10">
      <LinkForm />
    </section>
    <section class="container mt-10">
      <LinkItem
        v-for="i in 5"
        :link="{
          shortKey: 'string',
          longUrl: 'https://heroicons.com/',
          id: '1',
        }"
      />
      <LinkItem
        :link="{
          shortKey: 'qweqwqwsd',
          longUrl:
            'https://www.figma.com/file/daEyVZgvMXVrhdf0KYH5af/shrty?node-id=31-39&t=yRMKMKSH83Auftpn-0',
          id: '2',
        }"
      />
      <LinkItem
        :link="{
          shortKey: 'yjytjrh',
          longUrl: 'https://mail.yandex.ru/?uid=214526127#tabs/relevant',
          id: '3',
        }"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ middleware: "auth" });
</script>

<style scoped></style>
