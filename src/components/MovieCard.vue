<script setup>
import { ref } from 'vue'
import moviesData from '../API/MOCK_DATA.json'
import RatingComponent from './RatingComponent.vue'
import { Icon } from '@iconify/vue'
import EditMovie from './EditMovie.vue'
import MovieHeader from './MovieHeader.vue'
const movies = ref([...moviesData])

function deleteMovie(index) {
  movies.value.splice(index, 1)
  movieTotal -= 1
}
function updateMovie(updatedMovie) {
  const index = movies.value.findIndex((movie) => movie.id === updatedMovie.id)
  if (index !== -1) {
    movies.value[index] = updatedMovie
  }
}
let movieTotal = moviesData.length
const averageMovieRate = (movieTotal / 5).toFixed(2)
</script>

<template>
  <MovieHeader :totalMovies="movieTotal" :averageRating="averageMovieRate" />
  <main
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 justify-center m-3"
  >
    <div
      v-for="(movie, index) in movies"
      :key="movie.id"
      class="relative bg-white text-black rounded-xl m-2"
    >
      <img :src="movie.url || movie.poster" :alt="movie.name" class="w-full h-100 rounded-t-xl" />
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
        <div class="w-full flex justify-end items-center">
          <EditMovie :movie="movie" @update-movie="updateMovie" />
          <Icon
            icon="material-symbols:delete-outline"
            class="text-[#939393] hover:bg-red-600 hover:rounded-2xl p-1 hover:cursor-pointer hover:text-white"
            @click="deleteMovie(index)"
            width="28"
            height="28"
          />
        </div>
      </section>
    </div>
  </main>
</template>
