<script setup>
import MovieHeader from './MovieHeader.vue'
import MovieCard from './MovieCard.vue'
</script>

<template>
  <main class="bg-cyan-950 h-[100vh] text-white grid grid-cols-1 justify-center items-center text-center">
    <MovieHeader />
    <section class="container">
      <MovieCard></MovieCard>

    </section>
  </main>
</template>

<style lang="css" scoped></style>
