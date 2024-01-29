<script setup lang="ts">
import type { Recipe } from '@/types'
import { useRouter } from 'vue-router'
import { ref, type Ref, onMounted } from 'vue'
import BoiteRecipeDetails from '@/components/BoiteRecipeDetails.vue'
import { storeAuthentification } from '@/store/storeAuthentification'

const router = useRouter()
const id = router.currentRoute.value.params.id
const recipe: Ref<Recipe> = ref({
  title: 'chargement',
  description: 'chargement',
  details: ['chargement', 'chargement', 'chargement'],
  preparation: ['chargement'],
  author: {
    id: 0,
    login: 'chargement',
    premium: false
  },
  categories: [
    {
      id: 0,
      name: 'chargement'
    }
  ],
  comments: [],
  favorites: [],
  datePublication: '2024-01-27T00:38:23+01:00',
  imageName: '',
  ingredients: [
    {
      id: 1,
      ingredientName: 'tchargementest2',
      quantity: 0,
      unit: 'chargement'
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
    <BoiteRecipeDetails :key="recipe.id" :recipe="recipe" :id="recipe.id" />
  </div>
</template>
