<script setup lang="ts">
import type { Recipe } from '@/types'
import { useRouter } from 'vue-router'
import { ref, type Ref, onMounted } from 'vue'
import BoiteRecipe from '@/components/BoiteRecipe.vue'

const router = useRouter()
const id = router.currentRoute.value.params.id
const recipe: Ref<Recipe> = ref({
  title: 'Angel',
  description: "Here I'AM",
  recipeDetails: {
    difficulty: 0,
    preparationTime: 0,
    nbPersons: 0
  },
  preparation: ['string'],
  categoryNames: ['Exotique'],
  compositionsData: [
    {
      ingredientName: 'string',
      quantity: 0,
      unit: 'string'
    }
  ]
})
onMounted(() => {
  fetch(encodeURI(String('http://127.0.0.1:8000/api/recipes/' + id)))
    .then((reponsehttp) => reponsehttp.json())
    .then((reponseJSON) => {
      recipe.value = reponseJSON
    })
})
</script>

<template>
  <div>
    <BoiteRecipe :key="recipe.id" :recipe="recipe" :id="recipe.id" />
  </div>
</template>
