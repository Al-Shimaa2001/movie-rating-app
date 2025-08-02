<script setup>
import { defineProps } from 'vue'

defineProps(
  {
    totalMovies: { type: Number, required: true },averageRating: { type: Number, required: true }
  }
)
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
        <button class="capitalize bg-cyan-500 p-1 rounded">add movies</button>
      </div>
    </nav>
  </header>
</template>

<style lang="css" scoped></style>
