<script setup >
import Button from './ButtonUi.vue';
</script>

<template>
      <header class="p-4">
      <nav class="flex flex-col md:flex-row md:justify-evenly items-center justify-center gap-2">
        <div class="flex justify-center items-center gap-3">
          <p>Total Movies : 3</p>
          <span>/</span>
          <p>Average Rating : 3</p>
        </div>
        <div class="flex gap-2">
          <Button title="Remove Rating" />
          <Button title="Add Movies" />
        </div>
      </nav>
    </header>
</template>

<style lang="css" scoped>

</style>