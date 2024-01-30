<script setup lang="ts">
import type { User } from '@/types'
import md5 from 'crypto-js/md5'
import { defineProps } from 'vue'
import BoiteRecipe from '@/components/BoiteRecipe.vue'

const props = defineProps<{ user: User }>()
</script>

<template>
  <div class="contentBox">
    <h1 class="top">Profil de {{ user.login }}</h1>
    <div>
      <img
        id="imgProfile"
        :src="'http://myavatar.iut.romainmillan.fr/fr/avatar/' + md5(user.adresseEmail)"
        alt="photo de profil"
      />
    </div>
    <div class="content">
      <div class="group">
        <h2>Adresse e-mail</h2>
        <div>{{ user.mailAdress }}</div>
      </div>
      <div class="group">
        <h1>Recettes de {{ user.login }}</h1>
        <div class="recipes-container">
          <BoiteRecipe
            v-for="recipe in user.recipes"
            :key="recipe.id"
            :recipe="recipe"
            :id="recipe.id"
          />
        </div>
        <div class="comments-container">
          <h2>Commentaires de {{ user.login }}</h2>
          <div v-for="comment in user.comments" :key="comment.id" class="comment">
            <div class="comment-top">
              A commenté la recette
              <router-link :to="{ name: 'singleRecipe', params: { id: comment.recipe.id } }">
                {{ comment.recipe.title }}
              </router-link>
              le
              {{ new Date(comment.datePublication).toLocaleString('fr') }}
            </div>
            <div class="comment-message">{{ comment.message }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contentBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;
}

h2 {
  margin-top: 20px;
}
.recipes-container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.comments-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.comment {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
}
.comment-top {
  font-weight: 500;
  font-size: 16px;
}
.comment-message {
  margin-top: 10px;
  font-size: 14px;
}
</style>
