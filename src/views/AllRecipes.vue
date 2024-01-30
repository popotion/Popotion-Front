<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import type { Recipe } from '@/types'
import BoiteRecipe from '@/components/BoiteRecipe.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nbRecipes: Ref<number> = ref(0)
const recipes: Ref<Recipe[]> = ref([
  {
    title: 'chargement',
    description: 'chargement',
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
  }
])

onMounted(async () => {
  const response = await fetch('http://127.0.0.1:8000/api/recipes')
  const reponseJSON = await response.json()
  recipes.value = reponseJSON['hydra:member']
  nbRecipes.value = recipes.value.length
})

function randomRecipe(): void {
  const random = Math.floor(Math.random() * nbRecipes.value)
  const recipe = recipes.value[random]
  router.push({ name: 'singleRecipe', params: { id: recipe.id } })
}
</script>

<template>
  <div class="random-container">
    <button class="random-button" @click="randomRecipe()">Recette aléatoire</button>
  </div>
  <div class="all-recipe">
    <BoiteRecipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" :id="recipe.id" />
  </div>
</template>
<style scoped>
.random-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
}
.random-button {
  padding: 10px;
  border-radius: 10px;
  background-color: var(--dark-orange);
  color: var(--font-color);
  font-weight: 500;
  font-size: 16px;
}
.all-recipe {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
