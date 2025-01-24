<script setup>
import { ref, computed } from 'vue'
import { movies } from '@/entities/index.js'
import { onMounted } from 'vue'

const props = defineProps({
  movieId: {
    type: String || Number,
    default: () => {},
  },
})

const movieData = ref({})

const getMovie = (id) => {
  const result = movies.store.methods.getMovie(id)
  movieData.value = result
}

const imageSrc = computed(() => `https://image.tmdb.org/t/p/w500/${movieData.value?.poster_path}`)

console.log(imageSrc.value)

onMounted(() => {
  getMovie(props.movieId)
  //TODO: Add request for case reloading page and store doesn't have the movie data
})
</script>

<template>
  <div>
    <h3 align="center" style="font-weight: 700">Movie Details goes here</h3>
    <div>
      <router-link to="/">Back to Movies List</router-link>
    </div>
    <hr />
    {{ movieData }}
    <img :src="imageSrc" alt="" />
  </div>
</template>
