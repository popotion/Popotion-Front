<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router'
import type { Recipe } from '@/types'
import { storeAuthentification } from '@/store/storeAuthentification'
import { flashMessage } from '@smartweb/vue-flash-message'

const router = useRouter()
const props = defineProps<{ recipe: Recipe }>()

function deleteRecipe() {
  fetch(`http://127.0.0.1:8000/api/recipes/${props.recipe.id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${storeAuthentification.JWT}`
    }
  }).then((response) => {
    if (response.status === 204 || response.status === 200) {
      router.push('/home')
      flashMessage.show({
        type: 'success',
        title: 'Recette supprimée'
      })
    } else {
      router.push('/home')
      flashMessage.show({
        type: 'error',
        title: 'Erreur lors de la suppression de la recette'
      })
    }
  })
}
</script>

<template>
  <div class="container mt">
    <div class="title">{{ recipe.title }}</div>
    <div class="img-container">
      <span class="imageName">Image</span>
      <img :src="'http://127.0.0.1:8000/api/getImage/' + props.recipe.imageName" alt="image" />
    </div>
    <div
      class="categories mt"
      v-for="category in recipe.categories"
      :key="category.id"
      :category="category"
      :id="category.id"
    >
      {{ category.name }}
    </div>
    <div class="description mt">
      <h3>Auteur:</h3>
      <router-link :to="{ name: 'singleUser', params: { id: recipe.author.id } }">
        <p :class="{ 'user-premium': recipe.author.premium }">{{ recipe.author.login }}</p>
      </router-link>
      <h3>Note de l'auteur</h3>
      <div>{{ recipe.description }}</div>
    </div>
    <div class="ingredients mt">
      <h3>Ingrédients</h3>
      <div class="ingredients-list" v-for="ingredient in recipe.ingredients" :key="ingredient.id">
        <span class="ing-elem first">{{ ingredient.ingredientName }}</span>
        <span class="ing-elem">Quantité : {{ ingredient.quantity }}</span>
        <span class="ing-elem">Unité : {{ ingredient.unit }}</span>
      </div>
    </div>
    <div class="details mt">
      <h3>Détails</h3>
      <div class="elements">{{ recipe.details[0] }}</div>
      <div class="elements">{{ recipe.details[1] }}</div>
      <div class="elements">{{ recipe.details[2] }}</div>
      <h3 class="preparation">Préparation</h3>
      <div v-for="p in recipe.preparation" :key="p">- {{ p }}</div>
    </div>
    <div class="btn-container">
      <router-link :to="{ name: 'formulaireUpdateRecipe', params: { id: recipe.id } }">
        <div class="update" v-if="recipe.author.id === storeAuthentification.id">✎</div>
      </router-link>
      <button
        @click="deleteRecipe()"
        class="delete"
        v-if="recipe.author.id === storeAuthentification.id"
      >
        ✖
      </button>
    </div>
    <div><h1>Commentaires</h1></div>
    <div class="comments" v-for="comment in recipe.comments" :key="comment.id">
      <h2 class="comment-auth">{{ comment.author.login }}</h2>
      {{ comment.message }}
    </div>
    <router-link :to="{ name: 'comment', params: { id: recipe.id } }">
      <button class="btn-add">Ajouter un commentaire</button>
    </router-link>
  </div>
</template>

<style scoped>
.imageName {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.img-container {
  display: flex;
  flex-direction: column;
  text-align: center;
}
img {
  width: 500px;
}
h1 {
  margin-top: 30px;
}
.user-premium {
  color: var(--premium-user-color);
}

.btn-add {
  margin-top: 20px;
  margin-bottom: 50px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: rgb(87, 87, 87);
  color: white;
  font-size: 15px;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}

.comments {
  padding: 15px;
  margin-top: 20px;
  width: 50%;
  border-radius: 20px;
  border: solid 1px black;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}
.btn-container {
  display: flex;
  margin-top: 20px;
}
.update {
  font-size: 20px;
  background-color: rgb(14, 202, 70);
  padding: 15px 20px;
  border-radius: 10px;
  color: black;
}

.delete {
  font-size: 20px;
  background-color: rgb(255, 46, 46);
  border-radius: 10px;
  padding: 15px 20px;
  color: black;
  border: none;
}
.first {
  font-size: 15px;
  font-weight: bold;
}
.ingredients-list {
  display: flex;
  flex-direction: column;
}
.preparation {
  margin-top: 10px;
}
.elements {
  margin-top: 10px;
}
.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}
.mt {
  margin-top: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.categories {
  padding: 8px;
  background-color: grey;
  border-radius: 20px;
  color: white;
}
</style>
