import apiRequest from '@/integration/api.js'
import { utils } from '@/shared/index.js'
import store from './store.js'

const apiKey = '74d142ff8fa0fd98cd623bae29ec338e'

const fetchMovies = async (category = 'popular', page) => {
  try {
    const movies = await apiRequest({
      method: 'GET',
      url: `/movie/${category}`,
      params: {
        api_key: apiKey,
        page,
      },
    })

    const { results, total_results } = movies
    console.log(total_results)
    const uniqueMovies = utils.removeDuplicates(results)
    store.methods.setMovies(uniqueMovies, total_results)
    console.log('movies:', store.state.movies)

    return results
  } catch (error) {
    console.error('Failed to fetch movie details:', error)
    throw error
  }
}

const fetchMovie = async (id) => {
  try {
    const movie = await apiRequest({
      method: 'GET',
      url: `/movie/${id}`,
      params: {
        api_key: apiKey,
      },
    })
    return movie
  } catch (error) {
    console.log(error)
  }
}

export default { fetchMovies, fetchMovie }
