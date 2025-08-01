<script setup>
import { ref } from 'vue'
import movies from '../API/MOCK_DATA.json'

function addMovie(newMovie) {
  movies.value.push(newMovie)
}
const totalMovies = ref(3) // This should be dynamically calculated based on your data
const averageRating = ref(3) // This should also be dynamically calculated based on your data
</script>

<template>
  <header class="p-4">
    <nav class="flex flex-col md:flex-row md:justify-evenly items-center justify-center gap-2">
      <div class="flex justify-center items-center gap-3">
        <p>Total Movies : {{ totalMovies }}</p>
        <span>/</span>
        <p>Average Rating : {{ averageRating }}</p>
      </div>
      <div class="flex gap-2">
        <button class="capitalize bg-cyan-500 p-1 rounded">remove rating</button>
        <button class="capitalize bg-cyan-500 p-1 rounded" @add-movie="addMovie"
          >add movies</button>
        
      </div>
    </nav>
  </header>
</template>

<style lang="css" scoped></style>
