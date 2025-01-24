<script setup>
import { ref, onMounted } from 'vue'
import { movies } from '@/entities/index.js'

import MoviesPage from './MoviesPage/MoviesPage.vue'

const moviesData = ref([])

onMounted(async () => {
  const result = await movies.actions.getMovies('popular')
  moviesData.value = result
})
</script>

<template>
  <div class="wrapper">
    <MoviesPage :movies="moviesData" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
</style>
