<script setup>
import MovieCard from './MovieCard.vue'

defineProps({
  movies: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div v-if="movies.length > 0" class="movies-wrp">
    <div v-for="movie in movies" :key="movie.id">
      <MovieCard :movie="movie" />
    </div>
  </div>
  <div v-else>No movies found</div>
</template>

<style scoped>
.movies-wrp {
  display: grid;
  grid-template-columns: repeat(5, 200px); /* 5 images per row, each with 200px width */
  gap: 10px; /* Add space between the images */
  padding-top: 40px;
}
</style>
