import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import MovieDetails from '../components/MoviesPage/MovieDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage,
    },
    {
      path: '/movie/:movieId', // Dynamic route with :id
      name: 'movie',
      component: MovieDetails,
      props: true,
      beforeEnter: (to, from, next) => {
        // Ensure the `id` is an integer
        const productId = parseInt(to.params.id, 10)
        if (productId <= 0) {
          // Redirect to home or an error page if the ID is invalid
          return next('/')
        }
        // Proceed to the product page if the ID is valid
        next()
      },
    },
    {
      path: '/:pathMatch(.*)',
      redirect: { name: 'homePage', component: HomePage },
    },
  ],
})

export default router
