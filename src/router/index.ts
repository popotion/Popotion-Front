import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import AllRecipes from '@/views/AllRecipes.vue'
import AllCategories from '@/views/AllCategories.vue'
import SingleRecipe from '@/views/SingleRecipe.vue'
import SingleUser from '@/views/singleUser.vue'
import FormulaireRecipe from '@/views/FormulaireRecipe.vue'
import Login from '@/views/Login.vue'
import Inscription from '@/views/Inscription.vue'
import AdminPanel from '@/views/AdminPanel.vue'
import FormulairePatchRecipe from '@/views/FormulairePatchRecipe.vue'
import FormulairePatchUser from '@/views/FormulairePatchUser.vue'


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
            component: FormulaireRecipe
        },
        {
            path: '/formulaireUpdateRecipe/:id',
            name: 'formulaireUpdateRecipe',
            component: FormulairePatchRecipe
        },
        {
            path: '/formulaireUpdateUser/:id',
            name: 'formulaireUpdateUser',
            component: FormulairePatchUser
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