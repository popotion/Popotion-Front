<script setup lang="ts">
import { storeAuthentification } from '@/store/storeAuthentification.ts'
import { ref } from 'vue'
import { flashMessage } from '@smartweb/vue-flash-message'

const emit = defineEmits<{ updated: [] }>()

function envoyer() {
  const body = {
    title: titre.value,
    description: description.value,
    recipeDetails: {
      difficulty: difficulty.value,
      preparationTime: preparationTime.value,
      nbPersons: nbPersons.value
    },
    preparation: [preparation.value],
    categoryNames: [categories.value],
    compositionsData: [
      {
        ingredientName: ingredientName.value,
        quantity: quantity.value,
        unit: unit.value
      }
    ]
  }

  fetch('http://127.0.0.1:8000/api/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/ld+json',
      Authorization: `Bearer ${storeAuthentification.JWT}`
    },
    body: JSON.stringify(body)
  }).then((response) => {
    if (response.status == 201 || response.status == 200) {
      emit('updated')
      flashMessage.show({
        type: 'success',
        title: 'Votre recette a bien été créée !'
      })
    } else {
      flashMessage.show({
        type: 'error',
        title: 'Champs invalides ou manquants !'
      })
    }
  })
}

let titre = ref('')
let description = ref('')
let difficulty = ref('')
let preparationTime = ref('')
let nbPersons = ref('')
let preparation = ref('')
let categories = ref('')
let ingredientName = ref('')
let quantity = ref('')
let unit = ref('')
</script>
<template>
  <p class="header">Créer une recette</p>
  <div class="wrapper">
    <form class="form" @submit.prevent="envoyer">
      <p>Titre</p>
      <input v-model="titre" />

      <p>Description</p>
      <input v-model="description" />

      <div>Détails de la recette</div>

      <p>difficulté</p>
      <input type="number" min="1" v-model="difficulty" />

      <p>Temps de préparation</p>
      <input type="number" min="0" v-model="preparationTime" /><span> minutes</span>

      <p>Nombre de personnes</p>
      <input type="number" min="0" v-model="nbPersons" />

      <p>Préparation</p>
      <input v-model="preparation" />

      <p>Catégories</p>
      <input v-model="categories" />

      <div>Composition</div>

      <p>Ingrédient</p>
      <input v-model="ingredientName" />

      <p>Quantité</p>
      <input type="number" min="0" v-model="quantity" />

      <p>Unité</p>
      <input v-model="unit" />
      <p></p>
      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>
<style scoped>
div.wrapper {
  background-color: rgb(252, 255, 254);
  box-shadow: 0 0 0.3rem #999;
  font:
    1.2em 'Fira Sans',
    sans-serif;
  border-radius: 10px;
  width: 59%;
  padding: 5px;
  flex-grow: 1;
  margin: auto auto 5% auto;
  font-family: 'comfortaa';
}
h3 {
  text-align: center;
  font-weight: 900;
}
.group {
  display: flex;
  flex-direction: column;
  text-align: center;
}
textarea {
  width: 60%;
  height: 100px;
  margin: 10px auto;
  border: solid 1px #ccc;
  border-radius: 10px;
}
button {
  width: 20%;
  margin: 10px auto;
  border-radius: 2px;
  background-color: rgb(75, 81, 85);
  font-size: 20px;
  border: none;
  padding: 5px;
  color: white;
  font-family: 'comfortaa';
}

.form {
  text-align: center;
}

.form div {
  margin: 20px 0;
  font-weight: 500;
  font-size: 20px;
}

input {
  width: 40%;
  height: 30px;
  margin: 10px auto;
  border: solid 1px #ccc;
  border-radius: 10px;
}

.input {
  width: 40%;
  height: 30px;
  margin: 10px auto;
  border: solid 1px #ccc;
  border-radius: 10px;
}
.header {
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  margin: 20px;
}

#preparation {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
