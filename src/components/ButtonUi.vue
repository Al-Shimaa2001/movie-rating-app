<script setup>
import { defineProps } from 'vue'
 defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <div>
    <button class="capitalize bg-cyan-500 p-1 rounded">{{ title }}</button>
  </div>
</template>

<style scoped></style>
