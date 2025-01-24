import { reactive } from 'vue'

const state = reactive({
  movie: {},
  movies: [],
})

const methods = {
  setMovies: (movies) => {
    state.movies = movies
  },
  getMovie: (id) => {
    const movie = state.movies.find((movie) => movie.id == id)
    return movie
  },
}

export default { state, methods }
