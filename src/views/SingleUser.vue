<script setup lang="ts">
import type { User, Recipe } from '@/types'
import { useRouter } from 'vue-router'
import { ref, type Ref, onMounted } from 'vue'
import BoiteUser from '@/components/BoiteUser.vue'
import BoiteRecipe from '@/components/BoiteRecipe.vue'

const router = useRouter()
const id = router.currentRoute.value.params.id
const user: Ref<User> = ref({
  title: 'chargement',
  description: 'chargementM',
  recipeDetails: {
    difficulty: 0,
    preparationTime: 0,
    nbPersons: 0
  },
  preparation: ['chargement'],
  categoryNames: ['chargement'],
  compositionsData: [
    {
      ingredientName: 'chargement',
      quantity: 0,
      unit: 'chargement'
    }
  ]
})
const recipes: Ref<Recipe[]> = ref({
  title: 'chargement',
  description: 'chargementM',
  recipeDetails: {
    difficulty: 0,
    preparationTime: 0,
    nbPersons: 0
  },
  preparation: ['chargement'],
  categoryNames: ['chargement'],
  compositionsData: [
    {
      ingredientName: 'chargement',
      quantity: 0,
      unit: 'chargement'
    }
  ]
})

onMounted(() => {
  fetch(encodeURI(String('http://127.0.0.1:8000/api/users/' + id)))
    .then((reponsehttp) => reponsehttp.json())
    .then((reponseJSON) => {
      user.value = reponseJSON
    })
  fetch(encodeURI(String('http://127.0.0.1:8000/api/user/' + id + '/recipe')))
    .then((reponsehttp) => reponsehttp.json())
    .then((reponseJSON) => {
      recipes.value = reponseJSON['hydra:member']
    })
})
</script>

<template>
  <div>
    <BoiteUser :key="user.id" :user="user" :id="user.id" />
  </div>
  <div>
    <BoiteRecipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" :id="recipe.id" />
  </div>
</template>
