<script setup>
import movies from '../API/MOCK_DATA.json'
import RatingComponent from './RatingComponent.vue'
</script>

<template>
  <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 justify-center m-3">
    <div
      v-for="movie in movies"
      :key="movie.id"
      class="relative bg-white text-black rounded-xl m-2"
    >
      <img :src="movie.poster" :alt="movie.name" class="w-full h-100 rounded-t-xl" />
      <section class="details py-3 px-5">
        <h3 class="font-semibold text-2xl mt-3">{{ movie.name }}</h3>
        <span
          v-for="(genres, index) in movie.genres"
          :key="index"
          class="inline-block px-1 me-3 bg-blue-400 rounded-2xl text-white"
          >{{ genres }}</span
        >
        <p class="my-3 font-semibold text-gray-800">{{ movie.description }}</p>
        <RatingComponent />
      </section>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
