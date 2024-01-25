import { reactive, ref } from 'vue'

export const storeAuthentification = reactive({
  estConnecte: false,
  JWT: "",
  connexion(login: string, motDePasse: string, succes:()=>void, echec:()=>void): void {
    const connectingUser = ref({
        login: login,
        password: motDePasse,
    });
    fetch("http://127.0.0.1:8000/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(connectingUser.value),
    })
    .then((response) => {
      response.json().then(data => {
          if (response.status === 201 || response.status === 200) {
              this.JWT = data.token;
              this.estConnecte = true;
              succes();
          }
          else {
              echec();
          }
      })
    })
  },
  deconnexion(): void {
    this.JWT = "",
    this.estConnecte = false;
  },
})
