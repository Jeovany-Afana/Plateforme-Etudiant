//LE API(Application Programming Interface)
//1- XMLHTTPRequest(N'est plus utilisée)

function reqListener() {
  console.log(this.responseText);
}

// let req = new XMLHttpRequest(); //On crée une nouvelle instance de XMLHttpRequest

// req.onload = reqListener; //On apelle notre fonction qui permet d'afficher le résultat de la requête dans la console sous forme de texte
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

//2- FETCH(Vas chercher)

// fetch("data.txt")
//   .then((response) => {
//     response.text();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     //On capture l'érreur (Le cas échéans)
//     console.log(error);
//   });

let titre_blague = document.querySelector("h3");
let reponse_blague = document.querySelector("h4");
fetch("https://api.blablagues.net/?rub=blagues")
  .then((response) => response.json())
  .then((response) => {
    titre_blague.innerHTML = response.data.content.text_head;

    reponse_blague.innerHTML = response.data.content.text
      ? response.data.content.text
      : response.data.content.text_hidden;
  });

document.querySelector("button").addEventListener("click", function () {
  location.reload();
});
