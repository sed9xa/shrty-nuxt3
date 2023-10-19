<template>
  <section class="h-screen grid place-content-center">
    <div class="max-w-3xl mx-auto text-center">
      <div class="swiper mb-5">
        <Swiper
          ><SwiperSlide
            class="swiper-slide"
            v-for="slide in data"
            :key="slide.id"
            
          >
            <div :style="{ 'background-color': slide.color }" class="card">
              <div class="card-img w-full flex justify-center my-5">
                <img class="h-[250px] w-[300px]" :src="slide.image_url" alt="" />
              </div>
              <div class="card-title">{{ slide.title }}</div>
              <div class="card-text">{{ slide.description }}</div>
            </div>
          </SwiperSlide>
          
          </Swiper
        >
      </div>
      <h1 class="text-5xl font-bold heading">
        Make your links tiny and easy to share with tnyl
      </h1>
      <p class="my-10 text-lg w-10/12 md:w-2/3 mx-auto">
        Transform your long, cumbersome URLs into short and shareable links with
        TinyLink
      </p>
      <button class="btn text-black" @click="addData">clickme</button>
      <NuxtLink to="/dashboard" class="btn btn-primary">Short Now</NuxtLink>
    </div>
  </section>
  >
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Database } from "~~/types/supabase";

const client = useSupabaseClient<Database>();

const { data } = await useAsyncData("sliderItem", async () => {
  const { data, error } = await client.from("sliderItems").select("*");
  console.log(data, error);
  return data;
});


const addData = async () => {
  const { data, error } = await client.from("sliderItems").insert({
    color: "green",
    description: "string | null",
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbemvurUpGX9-OaQB8xwbntJxVrK8avRi4_fgg5Rgt&s",
    title: "tileeeeeeeee",
  });
};

onMounted(()=>{
  
})

</script>

<style scoped>
.heading {
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 189%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
