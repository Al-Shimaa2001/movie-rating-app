<script setup>
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
const rating = ref([
  { filled: false },
  { filled: false },
  { filled: false },
  { filled: false },
  { filled: false },
])

let rateNumber = ref(0)
function addRating(index) {
  if (addEventListener) {
    rateNumber.value = index + 1
    rating.value.forEach((star, i) => {
      star.filled = i <= index
    })
  }
}
</script>

<template>
  <div class="flex">
    <p>Rating ({{ rateNumber }}/5)</p>
    <ul class="flex">
      <li v-for="(icon, index) in rating" :key="index">
        <Icon
          :icon="icon.filled ? 'ic:round-star-rate' : 'material-symbols-light:star-outline-rounded'"
          width="24"
          height="24"
          style="color: #faff09"
          @click="addRating(index)"
        />
      </li>
    </ul>
  </div>
  <section class="absolute end-1 top-1">
    <div class="relative">
      <Icon icon="ic:round-star-rate" width="60" height="60" style="color: #faff09" />
      <span class="absolute top-4.5 start-6.5 font-semibold text-lg">{{ rateNumber }}</span>
    </div>
  </section>
</template>

<style lang="css" scoped>
.clicked {
  color: #faff09;
}
</style>
