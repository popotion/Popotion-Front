<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import type { Recipe } from '@/types'

const router = useRouter()
const props = defineProps<{ recipe: Recipe }>()
console.log(props.recipe)
</script>

<template>
  <div class="contentBox">
    <div class="top">
      <router-link :to="{ name: 'singleUser', params: { id: recipe.author.id } }" class="clickable">
        {{ recipe.author.login }}
      </router-link>
      -- {{ new Date(recipe.datePublication).toLocaleString('fr') }}
    </div>
    <div
      class="content clickable"
      @click="router.push({ name: 'singleRecipe', params: { id: recipe.id } })"
    >
      {{ recipe.description }}
    </div>
  </div>
</template>

<style scoped>
@import '@/components/ContentBox.css';
</style>
