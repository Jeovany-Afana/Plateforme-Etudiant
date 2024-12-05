// //LES TYPES DE DONNEES
// //1- Les nombres

// // let nombre = 12.15;

// // console.log(typeof nombre);

// //2- Les Strings
// //Utilisation de la fonction Number

// /*

//   int : Nombres entiers
//   float : nombre flottants ou à virgule
//   char : Caractère
//   string: Chaine de caractère
//   double : nombre flottants avec une plus grande précision
// */

// let string = "12.15"; //On déclare une variable de type string
// console.log(typeof string); //ça affiche String

// let nombre = Number(string); //On crée une  nouvelle variable qui
// //recoit notre chaine de caractère convertie

// console.log(nombre);

// console.log(typeof nombre);
// console.log(parseInt(nombre));

// //3- Les Booleens

// let booleen = true;
// booleen = false;

// //4- ARRAY(TABLEAU)

// let array = ["Papiico", 34, true, "Supdeco", , [4, 6, 8], "Thies, Mbour 1"];

// console.log(typeof array);
// let array2 = new Array();

// //5- LES OBJETS
// //Structures complexes qui permettent de stocker des propriétés en paire clé-valeur

// let personne = {
//   nom: "Papiico",
//   age: 34,
//   adulte: true,
//   ecole: "Supdeco",
//   adresse: "Thies, Mbour 1",
// };

// personne.nom = "Gaye";

// console.log(Object.values(personne));

//-----------------LA CONCATENATION--------------

// let nom = "Papiico";
// let age = 24;
// let ecole = "Supdeco";

// nom = "Mohamed";

// // document.querySelector("h1").innerHTML =
// //   "Je m'appelle " + nom + " j'ai " + age + " ans";

// //Utilisation des cotes de la touche 7

document.querySelector("h1").innerHTML = `
    Je m'appelle <span class="color">${nom}</span>
    j'ai ${age}ans
`;

//LES OPERATEURS

//1- LES Opérateurs Arithmétiques

// //Opérateur d'addition
// document.querySelector("h1").innerHTML = nombre1 + nombre2;

// //Opérateur de soustraction
// document.querySelector("h1").innerHTML = nombre1 - nombre2;

// //Opérateur de multiplication
// document.querySelector("h1").innerHTML = nombre1 * nombre2;

// //Opérateur de division
// document.querySelector("h1").innerHTML = nombre1 / nombre2;

//Calcul de la puissance
// document.querySelector("h1").innerHTML = 8 ** 2;

//ou encore, utilisation du module Math
// document.querySelector("h1").innerHTML = Math.pow(2, 8);

//2- OPERATEURS DE COMPARAISON

//document.querySelector("h1").innerHTML = nombre1 === nombre2;
/**
 * EGALITE
 =: Permet d'assigner une valeur 
 ==: Permet de comparer deux éléments au vu de leurs valeurs
 ===: Permet de comparer deux éléments au vu de leurs valeurs et de leurs types
 */

/**
  
 DIFFERENCE
 !=: Teste la différence des éléments au vu de leurs valeurs
 !==: Teste la différence des éléments au vu de leurs valeurs et de leurs types
  */

// document.querySelector("h1").innerHTML = nombre1 !== nombre2;

//Supériotité
// document.querySelector("h1").innerHTML = nombre1 > nombre2;

//LES STRUCTURES DE CONTROLE

//LES STRUCTURES CONDITIONELLES
//1- IF....ELSE

let nombre1 = 20;
let nombre2 = 40;

// if (nombre1 < nombre2) {
//   document.querySelector("h1").innerHTML = `
//     Le nombre est plus petit
//     `;
// } else if(nombre1 === nombre2){
//   document.querySelector("h1").innerHTML = `

//     Le nombre est plus grand
//     `;
// }

//UTILISATION DES STRUCTURES TERNAIRES

/**
  
    if(nombre 1 > nombre2){
    
    }
    else{
    }

    équivalent à:
    nombre1 > nombre2 ? "Le nombre est plus grand" : "Le nombre est plus petit"

 */

// document.querySelector("h1").innerHTML = `${nombre1 > nombre2 ? "Le nombre est plus grand" : "Le nombre est plus petit"}`;

//LE SWITCH
// let essai = 0;

// switch (essai) {
//   case 0:
//     document.querySelector("h1").innerHTML = ` La valeur est 0`;
//     break;

//   case 1:
//     document.querySelector("h1").innerHTML = `La valeur est 1`;
//     break;

//   case 2:
//     document.querySelector("h1").innerHTML = `La valeur est 2`;
//     break;

//   case 3:
//     document.querySelector("h1").innerHTML = `La valeur est 3`;
//     break;

//   default:
//     break;
// }

//LES BOUCLES

//1- La boucle FOR
// let tableau = ["Papiico", 34, true, "Supdeco", "Thies, Mbour 1"];

// // for (let i = 0; i < tableau.length; i++) {
// //   document.querySelector("h1").innerHTML += `<br>${tableau[i]}`;
// // }

// for (let i = 0; i < tableau.length; i++) {
//   document.querySelector("h1").innerHTML += `<li>${tableau[i]}</li>`;
// }

//DOM(Document Object Model)
/**

createElement: Permet de créer un nouvel élément HTML
 */

let ligne = document.createElement("tr");

let nom = document.createElement("td");

nom.innerHTML = "Gaye";
("Gaye");
let prenom = document.createElement("td");

prenom.innerHTML = "Papiico";
("Papiico");

let age = document.createElement("td");

age.innerHTML = 27;

ligne.appendChild(nom);

ligne.appendChild(prenom);

ligne.appendChild(age);

console.log(ligne);

document.querySelector("table").appendChild(ligne);

//SELECTION DES ELEMENTS DANS LE DOM
const titre = document.querySelector("#titre");

//Sélection de plusieurs éléments: querySelectorAll
const titres = document.querySelectorAll("h1");

//Sélectionner un élément grace à son ID : getElementById()
const titreParticulier = document.getElementById("titre");
//Ajout d'une classe à un élément HTML
// titreParticulier.classList.add("color");
// titreParticulier.classList.remove("color");
// titreParticulier.classList.toggle("color");

/**
 classList.add: permet d'ajouter une classe CSS à un élément
 classList.remove: permet de retirer une classe CSS à un élément
 classList.toggle: permet d'enlever et ajouter une classe CSS à un élément HTML par rapport à ce qu'on veut
 */

titreParticulier.addEventListener("click", function () {
  titreParticulier.classList.toggle("color");
});

//classList: Permet de récupérer la liste des classes d'un élément HTML
