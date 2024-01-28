import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AllRecipes from '@/views/AllRecipes.vue'
import AllCategories from '@/views/AllCategories.vue'
import SingleRecipe from '@/views/SingleRecipe.vue'
import SingleUser from '@/views/singleUser.vue'
import FormulaireRecipeVue from '@/views/FormulaireRecipe.vue'
import Login from '@/views/Login.vue'
import Inscription from '@/views/Inscription.vue'
import AdminPanel from '@/views/AdminPanel.vue'


const router = createRouter({
    history: createWebHistory(''),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: AllRecipes
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
        },
        {
            path: '/formulaireRecipe',
            name: 'formulaireRecipe',
            component: FormulaireRecipeVue
        },
        {
            path: '/inscription',
            name: 'inscription',
            component: Inscription
        },
        {
            path: '/adminPanel',
            name: 'adminPanel',
            component: AdminPanel
        },
        {
            path: '/user/:id',
            name: 'profile',
            component: SingleUser
        }
    ]
})

export default router