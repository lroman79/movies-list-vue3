<script setup>
import { computed, onMounted, ref } from 'vue'
import { vInfiniteScroll } from '@vueuse/components'
import { movies } from '@/entities/index.js'

import MovieCard from './MovieCard.vue'

const moviesData = computed(() => movies.store.state.movies)
const isMoviesReady = ref(false)
const scrollTarget = ref(null)
let page = 1
const isLoading = ref(false)
const isErrorOnLoading = ref(false)

const loadMovies = async () => {
  const category = 'popular'
  try {
    isLoading.value = true
    isErrorOnLoading.value = false

    await movies.actions.fetchMovies(category, page)

    isMoviesReady.value = true
  } catch (error) {
    isLoading.value = false
    isErrorOnLoading.value = true
    console.log(error)
  }
}

const loadMoreMovies = () => {
  if (movies.store.state.totalMovies < 1) return
  page += 1
  console.log('page:', page)
  loadMovies()
}

onMounted(() => {
  loadMovies()
})
</script>

<template>
  <div
    v-if="isMoviesReady && moviesData.length > 0"
    class="movies-wrp"
    ref="scrollTarget"
    v-infinite-scroll="loadMoreMovies"
  >
    <MovieCard v-for="movie in moviesData" :key="movie.id" :movie="movie" />
  </div>
  <div v-if="isMoviesReady && moviesData.length === 0">No movies found</div>
  <div v-if="!isMoviesReady && isLoading">Loading Movies..</div>
  <div v-if="isErrorOnLoading">Something went wrong!</div>
</template>

<style scoped>
/* .movies-wrp {
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 200px));
  gap: 10px;
  padding: 0 40px;
} */

.movies-wrp {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0 40px;
}
</style>
