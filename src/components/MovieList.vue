<script setup>
import MovieHeader from './MovieHeader.vue'
import MovieCard from './MovieCard.vue'
</script>

<template>
  <main class="bg-cyan-950 h-full text-white flex flex-col justify-center items-center">
    <MovieHeader />
    <section class="container">
      <MovieCard></MovieCard>
    </section>
  </main>
</template>

<style lang="css" scoped></style>
