<script setup>
import { defineProps } from 'vue'
// import AddMovies from './AddMovies.vue'
// import movies from '../API/MOCK_DATA.json'

defineProps({
  totalMovies: { type: Number, required: true },
  averageRating: { type: Number, required: true },
  onAddMovie: Function,
})
</script>

<template>
  <header class="p-4">
    <nav class="flex flex-col md:flex-row md:justify-evenly items-center justify-center gap-2">
      <div class="flex justify-center items-center gap-3">
        <p>Total Movies : {{ totalMovies }}</p>
        |
        <p>Average Rating : {{ averageRating }}</p>
      </div>
      <div class="flex gap-2">
        <button class="capitalize bg-cyan-500 p-1 rounded">remove rating</button>
        <!-- <AddMovies @add-movie="addMovie" /> -->
        <slot></slot>
      </div>
    </nav>
  </header>
</template>

<style lang="css" scoped></style>
