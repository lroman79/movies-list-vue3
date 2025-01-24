<script setup>
const props = defineProps({
  movie: {
    type: Object,
    default: () => {},
  },
})

const imageSrc = `https://image.tmdb.org/t/p/w200/${props.movie.poster_path}`
</script>

<template>
  <div class="card-wrp">
      <router-link :to="{ name: 'movie', params: { movieId: movie.id } }">
      <div class="image-wrp">
        <img :src="imageSrc" alt="movie poster" />
      </div>
      <div class="description">
        <div>{{ movie.title }}</div>
        <div>Releas Date: {{ movie.release_date }}</div>
        <div>Rating: {{ movie.vote_average }}</div>
      </div>
    </router-link>
    </div>
</template>

<style scoped>
.card-wrp {
  width: 200px;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.card-wrp img {
  width: 100%;
  height: auto;
}

.description {
  padding-left: 5px;
}
</style>
