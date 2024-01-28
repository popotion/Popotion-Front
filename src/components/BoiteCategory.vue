<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import type { Category } from '@/types'
import BoiteRecipe from '@/components/BoiteRecipe.vue'

const router = useRouter()
const props = defineProps<{ category: Category }>()
</script>

<template>
  <div class="contentBox">
    <div class="top">
      <div>
        <h2>Catégorie : {{ category.name }}</h2>
        <h3>{{ category.description }}</h3>
      </div>
    </div>
    <div v-for="recipe in category.recipes" :key="recipe.id" class="all-category">
      <BoiteRecipe :key="recipe.id" :recipe="recipe" :id="recipe.id" />
    </div>
  </div>
</template>

<style scoped>
.all-category {
  display: block;
}

div.top {
  background-color: white;
  box-shadow: none;
  border: none;
}
</style>
