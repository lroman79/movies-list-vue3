import { reactive } from 'vue'

const state = reactive({
  movie: {},
  movies: [],
  totalPages: 0,
  totalMovies: 0,
})

const methods = {
  setMovies: (movies, total) => {
    state.movies = state.movies.concat(movies)
    console.log(movies.length)
    state.totalMovies = total
  },
  getMovie: (id) => {
    const movie = state.movies.find((movie) => movie.id == id)
    return movie
  },
}

export default { state, methods }
