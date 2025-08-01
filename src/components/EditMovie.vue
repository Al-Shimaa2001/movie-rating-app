<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import FormAddMovies from './FormAddMovies.vue'
defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update-movie'])
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="link" size="icon" class="p-0">
        <Icon icon="bxs:edit" width="38" height="38" style="color: #939393" />
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
          <FormAddMovies :movie="movie" @update-movie="$emit('update-movie', $event)" />
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
