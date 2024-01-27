<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import type { Recipe } from '@/types'
import { storeAuthentification } from '@/store/storeAuthentification'

const router = useRouter()
const props = defineProps<{ recipe: Recipe }>()
</script>

<template>
  <div class="contentBox" @click="router.push({ name: 'singleRecipe', params: { id: recipe.id } })">
    <div class="top">
      <!--     <router-link :to="{ name: 'singleUser', params: { id: recipe.author.id } }" class="clickable">
        {{ recipe.author.login }}
      </router-link>  -->
      Postée le {{ new Date(recipe.datePublication).toLocaleString('fr') }}
    </div>
    <div class="content clickable">
      <h2>{{ recipe.title }}</h2>
      <div>{{ recipe.description }}</div>
      <p
        style="float: right; background-color: rgb(14, 202, 70); padding: 5px; border-radius: 10px"
      >
        ✎
      </p>
    </div>
  </div>
</template>

<style scoped>
@import '@/components/ContentBox.css';
</style>
