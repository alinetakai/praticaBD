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

  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adicionando usuário"
    });
}
  