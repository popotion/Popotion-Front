<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div id="wrapper">
    <header>
      <nav>
        <div>Popotions</div>
        <div @click="router.push({ name: 'allRecipes' })">Recettes</div>
        <div>Catégories</div>
        <div>Favoris</div>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
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
  width: 80%;
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
