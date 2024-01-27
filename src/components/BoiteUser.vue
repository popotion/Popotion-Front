<script setup lang="ts">
import type { User } from '@/types'
import md5 from 'crypto-js/md5'
import { onMounted } from 'vue'
import { reactive } from 'vue'

const props = defineProps<{ user: User }>()
let state = reactive({
  url: ''
})
async function loadImage() {
  try {
    const response = await fetch(
      'https://myavatar.iut.romainmillan.fr/fr/avatar/' + md5(props.user.mailAdress)
    )
    state.url = await response.text()
  } catch (error) {
    console.error('Erreur lors du chargement')
  }
}
onMounted(async () => {
  await loadImage()
})
</script>

<template>
  <div class="contentBox">
    <h1 class="top">Profil de {{ user.login }}</h1>
    <div>
      <img id="imgProfile" :src="state.url" alt="photo de profil" />
    </div>
    <div class="content">
      <div class="group">
        <h2>Adresse e-mail</h2>
        <div>{{ user.mailAdress }}</div>
      </div>
      <div class="group">
        <h1>Liste des Recettes</h1>
        <div></div>
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

  h2 {
    margin-top: 20px;
  }
}
</style>
