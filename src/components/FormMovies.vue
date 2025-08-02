<script setup>
import Label from './ui/label/Label.vue'
import Input from './ui/input/Input.vue'
import Textarea from './ui/textarea/Textarea.vue'
import Checkbox from './ui/checkbox/Checkbox.vue'
import DialogClose from './ui/dialog/DialogClose.vue'
import DialogFooter from './ui/dialog/DialogFooter.vue'
import Button from './ui/button/Button.vue'
import { ref } from 'vue'

const genresMovies = ['Action', 'Adventure', 'Sci-Fi', 'Drama', 'Thriller', 'Comedy']

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const movieDetails = ref({ ...props.movie })

const emit = defineEmits(['update-movie'])
function handleSubmit() {
  emit('update-movie', movieDetails.value)

  movieDetails.value = {
    name: '',
    description: '',
    url: '',
    genres: '',
    inTheater: false,
  }
}

function addGenres(genre) {
  const index = movieDetails.value.genres.indexOf(genre)
  if (index === -1) {
    movieDetails.value.genres.push(genre)
  }
}
</script>

<template>
  <main class="capitalize">
    <div class="grid grid-cols-1 gap-2.5 my-2">
      <Label for="movie-name">Name</Label>
      <Input
        type="text"
        id="movie-name"
        placeholder="movies name"
        v-model="movieDetails.name"
      ></Input>
    </div>
    <div class="grid grid-cols-1 gap-2.5 my-2">
      <Label for="movie-description">description</Label>
      <Textarea
        class="resize-none"
        id="movie-description"
        placeholder="description of movie"
        v-model="movieDetails.description"
      ></Textarea>
    </div>
    <div class="grid grid-cols-1 gap-2.5 my-2">
      <Label for="movie-image">image</Label>
      <Input type="url" id="movie-image" placeholder="image url" v-model="movieDetails.url"></Input>
    </div>
    <div class="grid grid-cols-1 gap-2.5 my-2">
      <Label>Genres</Label>

      <Label
        v-model="movieDetails.genres"
        v-for="(genre, index) in genresMovies"
        :key="index"
        class="hover:bg-gray-300 p-1 hover:rounded"
        @click="addGenres(genre)"
        >{{ genre }}</Label
      >
    </div>
    <div class="flex gap-5 my-4">
      <Checkbox id="in-theater" v-model="movieDetails.inTheater" />
      <Label for="in-theater">in theaters</Label>
    </div>
    <DialogFooter class="sm:justify-between">
      <DialogClose as-child>
        <Button type="button" variant="secondary"> Cancel </Button>
      </DialogClose>
      <Button type="button" variant="default" @click="handleSubmit"> Update </Button>
    </DialogFooter>
  </main>
</template>

<style lang="css" scoped></style>
