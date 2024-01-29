<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import type { Recipe } from '@/types'
import BoiteRecipe from '@/components/BoiteRecipe.vue'

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

onMounted(() => {
  fetch('http://api.iut.romainmillan.fr/api/recipes')
    .then((reponsehttp) => reponsehttp.json())
    .then((reponseJSON) => {
      recipes.value = reponseJSON['hydra:member']
    })
})
</script>

<template>
  <div class="all-recipe">
    <BoiteRecipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" :id="recipe.id" />
  </div>
</template>
<style scoped>
.all-recipe {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
