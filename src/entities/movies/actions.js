import apiRequest from '@/integration/api.js'
import store from './store.js'

const apiKey = '74d142ff8fa0fd98cd623bae29ec338e'

const getMovies = async (category = 'popular') => {
  try {
    const movies = await apiRequest({
      method: 'GET',
      url: `/movie/${category}`, // The movie ID in the URL (550 refers to the movie 'Fight Club')
      params: {
        api_key: apiKey, // API key for authentication
      },
    })

    const { results } = movies
    store.methods.setMovies(results)
    console.log('movies:', store.state.movies)

    return results
  } catch (error) {
    console.error('Failed to fetch movie details:', error)
  }
}

export default { getMovies }
