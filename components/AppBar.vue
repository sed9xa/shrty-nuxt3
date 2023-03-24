<template>
  <div class="fixed left-0 top-0 right-0 border-b boeder-white/20 bg-blur z-10">
    <nav class="container py-4 flex justify-between">
      <NuxtLink class="font-bold text-3xl text-white" :to="{ name: 'index' }"
        >Index page</NuxtLink
      >
      <ul class="flex items-center gap-4">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink>{{ link.label }}</NuxtLink>
        </li>
        <li><NuxtLink class="btn btn-primary" to="/auth">Sign in</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const navLinks = ref<
  {
    to: string;
    label: string;
  }[]
>([
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/about",
    label: "about",
  },
  {
    to: "/contact",
    label: "contact",
  },
]);
</script>
