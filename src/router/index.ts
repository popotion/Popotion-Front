import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AllRecipes from '@/views/AllRecipes.vue'
import AllCategories from '@/views/AllCategories.vue'
import SingleRecipe from '@/views/SingleRecipe.vue'
import SingleUser from '@/views/singleUser.vue'
import Login from '@/views/Login.vue'



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
            path: '/categories',
            name: 'allCategories',
            component: AllCategories
        },
        {
            path: '/recipes/:id',
            name: 'singleRecipe',
            component: SingleRecipe
        },
        {
            path: '/users/:id',
            name: 'singleUser',
            component: SingleUser
        },
        { 
            path: '/auth', 
            name: 'login',
            component: Login 
        }
    ]
})

export default router