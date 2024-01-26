<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeAuthentification } from '@/store/storeAuthentification'
import { flashMessage } from '@smartweb/vue-flash-message'

const router = useRouter()

function disconnect(): void {
  storeAuthentification.deconnexion()
  flashMessage.show({
    type: 'warning',
    title: 'Vous êtes déconnecté'
  })
}
</script>
<template>
  <div id="wrapper">
    <header>
      <FlashMessage />
      <nav>
        <div @click="router.push({ name: 'home' })">Popotions</div>
        <div @click="router.push({ name: 'allRecipes' })">Recettes</div>
        <div @click="router.push({ name: 'allCategories' })">Catégories</div>
        <div v-if="storeAuthentification.estConnecte">Favoris</div>
        <div v-if="!storeAuthentification.estConnecte" @click="router.push({ name: 'login' })">
          Connexion
        </div>
        <div v-if="storeAuthentification.estConnecte" @click="disconnect()">Déconnexion</div>
        <div class="post" v-if="storeAuthentification.estConnecte">+ Poster</div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.post {
  margin-left: 20px;
  font-weight: 600;
  padding: 5px;
  background-color: #f5b59a;
  border-radius: 35px;
}
#wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
header {
  width: 100%;
  position: sticky;
  top: 0px;
  padding: 20px;
}
header h1 {
  text-align: center;
  font-family: helvetica, serif;
  font-weight: 700;
}
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
nav > div:first-child {
  font-size: 1.5rem;
  font-weight: 700;
}

nav > div {
  padding: 10px;
  flex-grow: 1;
  text-align: center;
}
nav > div:hover {
  cursor: pointer;
}
main {
  max-width: 1280px;
  width: 780px;
  padding: 10px;
  flex-grow: 1;
}

@media (max-width: 800px) {
  main {
    width: 80%;
  }
}
</style>
