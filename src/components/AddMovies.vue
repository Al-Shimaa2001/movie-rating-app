<script setup lang="ts">
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import AddMovieForm from './AddMovieForm.vue'
const emit = defineEmits(['add-movie'])

function addMovie(newMovie) {
  emit('add-movie', newMovie)
}
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button class="capitalize bg-cyan-500 p-1 rounded">
        Add Movie
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
          <AddMovieForm  @add-movie="addMovie" />
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<style lang="css" scoped></style>
