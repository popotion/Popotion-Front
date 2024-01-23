import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AllRecipes from '@/views/AllRecipes.vue'
import SingleRecipe from '@/views/SingleRecipe.vue'

const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/recipes',
            name: 'allRecipes',
            component: AllRecipes
        },
        {
            path: '/recipes/:id',
            name: 'singleRecipe',
            component: SingleRecipe
        }
    ]
})

export default router