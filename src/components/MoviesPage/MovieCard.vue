<script setup>
const props = defineProps({
  movie: {
    type: Object,
    default: () => {},
  },
})

const imageSrc = `https://image.tmdb.org/t/p/w200${props.movie.poster_path}`
</script>

<template>
  <div class="card-wrp">
    <router-link :to="{ name: 'movie', params: { movieId: movie.id } }" class="link">
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
  max-width: 200px;
  border: 1px solid #ccc;
  overflow: hidden;
  border-radius: 5px;
}

.image-wrp img {
  width: 100%;
  height: auto;
}

.description {
  padding-left: 5px;
}

a.link {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-decoration: none;
}
</style>
