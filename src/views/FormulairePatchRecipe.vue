<script setup lang="ts">
import { storeAuthentification } from '@/store/storeAuthentification.ts'
import { ref, onMounted } from 'vue'
import { flashMessage } from '@smartweb/vue-flash-message'
import router from '@/router'

const emit = defineEmits<{ updated: [] }>()
let titre = ref('')
let description = ref('')
let preparation = ref('')
let categories = ref('')
let ingredientName = ref('')
let quantity = ref('')
let unit = ref('')

const id = router.currentRoute.value.params.id

const inscriptionRecipe = ref({
  title: '',
  description: '',
  preparation: [],
  categoryNames: [],
  ingredients: [
    {
      ingredientName: '',
      quantity: 0,
      unit: ''
    }
  ],
  imageName: ''
})

// function getRecipe(): void {
//   fetch('http://127.0.0.1:8000/api/recipes/' + id, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/ld+json'
//     }
//   }).then((response) => {
//     response.json().then((data) => {
//       inscriptionRecipe.value = data
//       console.log(inscriptionRecipe.value)
//     })
//   })
// }

function envoyer() {
  const body = {
    title: titre.value,
    description: description.value,
    preparation: [preparation.value],
    categoryNames: [categories.value],
    compositionsData: [
      {
        ingredientName: ingredientName.value,
        quantity: quantity.value,
        unit: unit.value
      }
    ],
    imageName: ''
  }

  fetch('http://127.0.0.1:8000/api/recipes/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/merge-patch+json',
      Authorization: `Bearer ${storeAuthentification.JWT}`
    },
    body: JSON.stringify(body)
  }).then((response) => {
    if (response.status == 201 || response.status == 200) {
      emit('updated')
      flashMessage.show({
        type: 'success',
        title: 'Votre recette a bien été modifiée !'
      })
    } else {
      flashMessage.show({
        type: 'error',
        title: 'Champs invalides ou manquants !'
      })
    }
  })
}

// onMounted(() => {
//   getRecipe()
// })
</script>
<template>
  <p class="header">Modifier la recette</p>
  <div class="wrapper">
    <form class="form" @submit.prevent="envoyer">
      <p>Titre</p>
      <input v-model="inscriptionRecipe.title" />

      <p>Description</p>
      <input v-model="inscriptionRecipe.description" />

      <div>Détails de la recette</div>

      <p>Préparation</p>
      <input v-model="inscriptionRecipe.preparation" />

      <p>Catégories</p>
      <input v-model="inscriptionRecipe.categoryNames" />

      <div>Composition</div>
      <button type="submit">Modifier</button>
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
  background-color: rgb(30, 255, 142);
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
