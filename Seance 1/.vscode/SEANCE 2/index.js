//LE DOM(Document Object Model)

//SELECTEURS

//LES DIFFERENTS TYPES DE SELECTEURS (Manières d'accéder à un élément)

//1- En utilisant le nom de la balise
let titre = document.querySelector("#titre");

//2- En utilisant son ID
let titre2 = document.querySelector("#titre");
let titreIdentifiant = document.getElementById("titre"); //(La plus utilisée)

//3- En utilisant le nom de la classe

let titre3 = document.querySelector(".titre");

//4- Chemin d'accès

let titrePrecis = document.querySelector("div > #titre2");

let cellule = document.querySelector("tr > th");

//5- QuerySelectorAll Pour accéder à plusieurs éléments
let butons = document.querySelectorAll(".bouttons");

//LES EVENEMENTS

//NB: Pour accéder au contenu d'une balise HTML on utilise innerHTML
//1- Click

let compteur = document.getElementById("compteur");
let compte = 0;

// titre.addEventListener("click", function () {
//   //On met ici les différentes actions qu'on veut exécuter
//   compte = compte + 1;
//   compteur.innerHTML = compte;
//   //   document.body.style.backgroundColor = "red"; //Action1
//   //   titrePrecis.style.color = "yellow"; //Action 2
// });

//CARACTERISTIQUES D'UN EVENEMENT

titre.addEventListener("click", function (event) {
  //On met ici les différentes actions qu'on veut exécuter
  console.log(event);
});

//1- MOUSEMOVE
//Ce qui se passe lorsqu'on passe le curseur sur un élément

let mousemove = document.querySelector(".mousemove");

document.addEventListener("mousemove", function (event) {
  //   console.log(`left = ${event.pageX},  top = ${event.pageY}`);

  mousemove.style.left = event.pageX + "px";
  mousemove.style.top = event.pageY + "px";
});

titre.addEventListener("mousemove", function () {
  titre.style.backgroundColor = "green";
  titre.style.transform = "scale(1.2)";
});

//MOUSEOUT
//Lorsqu'on enlève le curseur sur un élément
titre.addEventListener("mouseout", function () {
  titre.style.backgroundColor = "white";
  titre.style.transform = "scale(1)";
  titrePrecis.innerHTML = "Souris hors du bouton";
});

//MOUSEDOWN
titre.addEventListener("mousedown", function () {
  //   alert("MouseDown");
});

//MOUSEUP
//Ce qui se passe lorsqu'on arrête d'appuyer sur la souris

titre.addEventListener("mouseup", function () {
  titrePrecis.innerHTML = "Doigt enlever";
});

//MOUSEOVER

titre.addEventListener("mouseover", function () {
  titrePrecis.innerHTML = "Souris sur le bouton";
});

//---------------------------------------------------------------------
//EVENEMENTS SUR LE CLAVIER (KEYPRESS)
const audio = new Audio(); //On créer une nouvelle instance de l'objet Audio()
audio.src = "la.m4a"; //Chemin d'accès vers le fichier audio

document.addEventListener("keypress", function (event) {
  if (event.key === "J") {
    titrePrecis.innerHTML = event.key;
    audio.play();
  } else if (event.key === "K") {
    audio.src = "mi.m4a";
    audio.play();
  } else if (event.key === "E") {
    audio.src = "pa.m4a";
    audio.play();
  }
});

//LE SCROLL

window.addEventListener("scroll", function (event) {
  if (this.window.scrollY > 3) {
    this.document.querySelector(".scroll").style.top = 0 + "px";
    mousemove.style.backgroundColor = "green";
  } else {
    this.document.querySelector(".scroll").style.top = -110 + "px";
    mousemove.style.backgroundColor = "red";
  }
});
