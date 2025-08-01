<script setup>
import MovieHeader from './MovieHeader.vue'
import MovieCard from './MovieCard.vue'
</script>

<template>
  <main class="bg-cyan-950 h-full text-white flex flex-col justify-center items-center">
    <div class="container">
      <MovieHeader />
      <section class="container">
        <MovieCard></MovieCard>
      </section>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
