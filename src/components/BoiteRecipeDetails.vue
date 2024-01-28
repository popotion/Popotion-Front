<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import type { Recipe } from '@/types'

const router = useRouter()
const props = defineProps<{ recipe: Recipe }>()
</script>

<template>
  <div class="container">
    <div class="title">{{ recipe.title }}</div>
    <div
      class="categories"
      v-for="category in recipe.categories"
      :key="category.id"
      :category="category"
      :id="category.id"
    >
      {{ category }}>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
</style>
