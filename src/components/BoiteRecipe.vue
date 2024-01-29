<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Recipe } from '@/types'

const router = useRouter()
const props = defineProps<{ recipe: Recipe }>()
</script>

<template>
  <div
    class="contentBox"
    @click="router.push({ name: 'singleRecipe', params: { id: props.recipe.id } })"
  >
    <div class="top">
      Postée le {{ new Date(props.recipe.datePublication).toLocaleString('fr') }}
    </div>
    <div class="content clickable">
      <h2>{{ recipe.title }}</h2>
      <div>{{ recipe.description }}</div>
    </div>
  </div>
</template>

<style scoped>
@import '@/components/ContentBox.css';
</style>
