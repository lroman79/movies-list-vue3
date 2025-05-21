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

const movieData = ref(null)
const movieReady = ref(false)

const getMovie = async (id) => {
  const result = await movies.actions.fetchMovie(id)
  movieData.value = result
  setTimeout(() => (movieReady.value = true), 1000)

  console.log('detals', result)
}

const imageSrc = computed(() => `https://image.tmdb.org/t/p/w300${movieData.value?.poster_path}`)

const setDefaultImg = (event) => (event.target.src = '/assets/images/default-img.png')

onMounted(() => {
  getMovie(props.movieId)
})
</script>

<template>
  <div>
    <h3 style="font-weight: 700" align="center">Movie Details goes here</h3>
    <div>
      <router-link to="/">Back to Movies List</router-link>
    </div>
    <hr />
    <div v-if="movieReady" class="details-wrp">
      <img :src="imageSrc" alt="" @error="setDefaultImg" />
      {{ movieData }}
    </div>
    <div v-if="!movieReady">Loading Movie Info...</div>
    <div v-if="movieReady && !movieData?.id">
      <p>Oops! We can't find the page you're looking for</p>
    </div>
  </div>
</template>

<style scoped>
.details-wrp {
  display: flex;
  padding-top: 30px;
}
</style>
