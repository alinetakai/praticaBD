// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDjXpJe2-RbAA5HJzuk5_aBmQiNW5X0nas",
    authDomain: "praticabd1.firebaseapp.com",
    databaseURL: "https://praticabd1-default-rtdb.firebaseio.com",
    projectId: "praticabd1",
    storageBucket: "praticabd1.appspot.com",
    messagingSenderId: "1006307125275",
    appId: "1:1006307125275:web:0e995560227b6039a130be"
  };
  
 // Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

/* primeira tentativa de função (código original que funcionava antes)
function addUser() {
    let userName = document.getElementById("userName").value;
    firebase.database().ref('/').child(userName).update({
      purpose: 'adicionando usuário'
    });
}
*/

//tentativa de novo código
const db = firebase.firestore();

function addUser() {
    let userName = document.getElementById("userName").value;

    // Verifica se o campo não está vazio
    if (userName.trim() !== "") {
        // Cria um novo documento com o nome do usuário como ID
        db.collection("users").doc(userName).set({
            purpose: "adicionando usuário"
        })
        .then(() => {
            console.log("Usuário adicionado com sucesso!");
        })
        .catch((error) => {
            console.error("Erro ao adicionar usuário: ", error);
        });
    } else {
        console.log("Por favor, insira um nome de usuário.");
    }
}