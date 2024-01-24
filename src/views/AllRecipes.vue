<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import type { Recipe } from '@/types'
import BoiteRecipe from '@/components/BoiteRecipe.vue'

const recipes: Ref<Recipe[]> = ref([])

onMounted(() => {
  fetch('http://127.0.0.1:8000/api/recipes')
    .then((reponsehttp) => reponsehttp.json())
    .then((reponseJSON) => {
      recipes.value = reponseJSON['hydra:member']
    })
})
</script>

<template>
  <div>
    <BoiteRecipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" :id="recipe.id" />
  </div>
</template>
