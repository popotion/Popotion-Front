<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import type { Recipe } from '@/types'
import BoiteRecipe from '@/components/BoiteRecipe.vue'

const recipes: Ref<Recipe[]> = ref([
  {
    title: 'Blur',
    description: 'string',
    recipeDetails: {
      difficulty: 0,
      preparationTime: 0,
      nbPersons: 0
    },
    preparation: ['string'],
    categoryNames: ['Exotique'],
    compositionsData: [
      {
        ingredientName: 'Banane',
        quantity: 0,
        unit: 'string'
      }
    ]
  },
  {
    title: 'Blur',
    description: 'string',
    recipeDetails: {
      difficulty: 0,
      preparationTime: 0,
      nbPersons: 0
    },
    preparation: ['string'],
    categoryNames: ['Exotique'],
    compositionsData: [
      {
        ingredientName: 'Banane',
        quantity: 0,
        unit: 'string'
      }
    ]
  }
])

onMounted(() => {
  fetch('http://127.0.0.1:8000/api/recipes')
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
