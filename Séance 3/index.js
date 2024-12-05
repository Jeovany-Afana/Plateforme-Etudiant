// 1- LES TYPES DE DONNEES
/**
 * String
 * Number
 * Booleen
 * Array ou TABLEAUX
 * OBJETS
 */

let string = "Ma chaine"; //String
let number = 12.05; //Nom res entier et ou flottants
let boolean = true; //Booleen
let maVariable; //Undifined
let nulle = null; //Variable nulle

/**
 * on utilise les [] pour les tableaux
 * on utilise les {} pour les objets
 */
//Les tableaux
let notreTableau = [
  "Dakar",
  24,
  true,
  [1, 2],
  { nom: "GAYE", prenom: "Papiico" },
];
// console.log(notreTableau); //On se log le tableau dans la console pour pouvoir l'examiner

// console.log(notreTableau[4].nom);
// /**
//  * NB:
//  * Pour accéder aux éléments d'un tableau on utilise les indices
//  * Pour accéder aux éléments d'un objet on utilise le "."
//  */

// let personne = {
//   nom: "GAYE",
//   prenom: "Papiico",
//   age: 26,
//   adresse: "Thies",
//   marqueVoiture: "Mercedes",

//   //Exemples de méthodes

//   /**
//    * Marcher
//    * Dormir
//    * Aller à l'école
//    * Travailler
//    * Se marier
//    * Voyager
//    */
// };

// let telephone = {
//   marque: "Apple",
//   modele: "Iphone 13",
//   autonomie: "4500mAh",
//   couleur: "Bleu",

//   //Exemple de méthodes

//   /**
//    * Appler
//    * Recevoir des appels
//    * Charger
//    * Jouer de la musique
//    */
// };

//LES OBJETS
let personne = {
  pseudo: "Denis",
  age: 33,
  technos: ["JavaScript", "PHP", "HTML", "CSS"],
  admin: false,
};

//Pour ajouter un attribut à un objet en JS, il suffit de: nom_obet.nom_nouvel_Attribut = Valeur_Attribut
// personne.adresse = "Thies Nord";
// console.log(personne);

// let personnes = [
//   {
//     pseudo: "Denis",
//     age: 20,
//     technos: ["JavaScript", "PHP", "HTML", "CSS"],
//     admin: false,
//   },

//   {
//     pseudo: "Kevin",
//     age: 25,
//     technos: ["Python", "C", "C#", "React"],
//     admin: true,
//   },

//   {
//     pseudo: "Paule",
//     age: 43,
//     technos: ["Angular", "Django", "MySQL"],
//     admin: false,
//   },
// ];

// console.log(personnes[0]);

//STRUCTURES DE CONTROLE

// if (personnes[0].age > personnes[1].age) {
//   console.log(personnes[0].pseudo + " est plus grand");
// } else {
//   console.log(personnes[0].pseudo + " est plus petit");
// }

//Les boucles "for"
//1- Boucle "for" classique
//NB:  length est un attribut qui représente la taille (Nombre d'éléments de notre tableau)
const liste = document.getElementById("liste");

// for (let i = 0; i < personnes.length; i++) {
//   liste.innerHTML += `<li> ${personnes[i].pseudo}</li>`;
// }

//2- Boucle for avec of
//NB: La boucle for avec of permet d'accéder directement aux éléments du tableau qu'on parcours
// for (const user of personnes) {
//   liste.innerHTML += `<li>${user.age}</li>`;
// }

// //3- Boucle for avec in
// //La boucle for avec in permet d'accéder aux indices des éléments du tableau
// for (const key in personnes) {
//   console.log(key);
// }

//4- Foreach (La plus utilisée)

// personnes.forEach(function (element) {
//   liste.innerHTML += `<li class="fontStyle">${element.pseudo}</li>`;
// });

//LES METHODES SUR LES TYPES DE DONNEES

// 1- Les méthodes sur les STRING

let string2 = "Javascript est un langage orienté objet";
// console.log(string2[11]);
//NB: Une chaine de caractère est en réalité un tableau de caractère dans lequel chaque caractère est placé à un indice

//- ParseInt

// console.log(parseInt("12"));

//- includes
//Permet de rechercher une chaine passée en paramètre dans une autre
let string3 = "Aujourd'hui c'est la troisième séance";

// console.log(string3.includes("séance"));

//isNan()
//Permet de vérifier si la valeur passée en paramètre n'est pas un nombre
// console.log(isNaN("Pape"));

//- length
//Permet de connaitre la taille de la chaine de caractère
// console.log(string3.length);

//- indexOf()
//Permet de trouver l'index d'un caractère ou d'une chaine dans une chaine de caractère
// let string4 = "Demain c'est lundi";
// console.log(string4.indexOf("lundi"));

//- slice()
//Permet d'ignorer un nombre précis de caractères qui sont au début ou à la fin d'une chaine
// let string5 = "La semaine prochaine devrait être bonne";
// console.log(string5.length);
// console.log(string5.slice(10));
// console.log(string5.slice(5, 17));

//-split()
//Permet d'isoler un caractère ou une chaine de caractère d'une chaine...
//Elle permet de séparer/Décomposer une chaine en utilisant un SEPARATEUR (élément passé en paramètre)
// let string5 =
//   "La semaine prochaine devrait être bonne et je vais beaucoup me balader car je ne vais rien faire en réalité. La vie est belle de mon côté";
// let nombreMot = string5.split(" ");
// console.log(nombreMot.length); //Permet de compter le nombre de mots

//toLowerCase
// //Elle permet de transformer une chaine en minuscule
// let string6 = "Nous Somme Dimanche Aujourd'hui Et On Apprend Le Data";

// console.log(string6.toLowerCase());

// //toUpperCase
// console.log(string6.toUpperCase());

//Replace
//Permet de remplacer un caractère ou une chaine de caractère par une autre

// let string6 = "Nous Somme Dimanche Aujourd'hui Et On Apprend Les Data";

// console.log(string6.replace("Dimanche", "Lundi"));

//------------------------- METHODES SUR LES NUMBERS (Nombres entiers et flottants)----------------------

// console.log(10 / 3);

//toFixed()
//Permet de fixer le nombre de chiffres qu'on veut après la virgule
// let nombre = 3.03;
// // console.log(nombre.toFixed(1));

// //ParseFloat
// //Qui permt de transformer un nombre flottant qui est dans une chaine de caractère en nombre
// // console.log(typeof parseFloat("12.33"));

// //MODULE MATH

// //round()
// //Permet d'arrondir un nombre à la aleur qui lui est directement supérieure
// console.log(Math.round(nombre));

// //floor()
// //Permet d'arrondir à a valeur qui lui est directement inférieure

// console.log(Math.floor(nombre));

// //ceil()
// //Permet d'arrondir au plus haut
// console.log(Math.ceil(nombre));

// //pow()
// //Calculer la puissance d'un nombre
// console.log(Math.pow(2, 6));

// //sqrt()
// //Calculer la racine carée
// console.log(Math.sqrt(9));

//---------------------- METHODES SUR LES ARRAYS (Tableaux) -------------------------

//Concatener deux tableaux
let tab1 = [8, 10, 3];
let tab2 = [4, 22, -4];
// // let tab3 = tab1 + tab2; //On peut le faira de cette manière
// // console.log(tab3);

//concat
// let tab3 = tab1.concat(tab2);

//Join()
//Permet de séparer les élément d'un tableau lors de l'affiche

// console.log(tab3.join("-"));

//- Slice()
// console.log(tab3);
// console.log(tab3.slice(2, 4));

// //indexOf
// console.log(tab3);
// console.log(tab3.indexOf(200));

//forEach
//Permet d'accéder à chaque élément d'un tableau/Objet de manière individuelle

// tab3.forEach(function (valeur) {
//   console.log(valeur);
// });

//FONCTIONS

// function affichage() {
//   console.log("Je suis une fonction");
// }

// affichage();

// //Fonction fléchée

// const newAffichage = (nom) => {
//   console.log("Je m'appelle: " + nom);
// };

// newAffichage("Joe");

//every()
//Permet de vérifier si tous les éléments du tableau contiennent une certaine valeur
// let valeurs = ["Php", "Python", "Pays", "Problème", "Pantalon"];

// console.log(valeurs.every((valeur) => valeur === "P"))//Il va afficher false car toutes les cases du tableau ne sont pas égales à "P"

//some()
//permet de vérifier si une valeur ou une donnée existe au moins une fois dans une case du tableau
// console.log(valeurs.some((valeur) => valeur === "Php"));

//Shift()
//permet d'enlever et de retourner le premier élément d'un tableau
// let premierElement = valeurs.shift();
// console.log(valeurs);
// console.log(premierElement);

//pop()
//Permet d'enlever et retourner le dernier élément d'un tableau

// let dernierElement = valeurs.pop();
// console.log(valeurs);
// console.log(dernierElement);

//---------------------------IMPORTANT----------------------
let tab3 = tab1.concat(tab2); //Notre tableau tab3 qui contient des chiffres

//reduce()
//Somme

// console.log(tab3);
// console.log(tab3.reduce((x, y) => x + y));

// //Produit des éléments du tableau
// console.log(tab3.reduce((x, y) => x * y));

// //Différence

// console.log(tab3.reduce((x, y) => x - y));

//--------------------------FILTER----------------

//On affiche uniquement les éléments du tableau qui sont compris entre 2 et 8
// console.log(tab3.filter((number) => number > 2 && number < 8));
// let valeurs = ["Php", "Python", "Pays", "Problème", "Pantalon"];

// //On affiche uniquement les élément qui ont la lettre "o"
// console.log(valeurs.filter((valeur) => valeur.includes("o")));

//------------------------------- sort -------------------
//Permet de ranger les éléments dans l'ordre croissant ou décroissant

// console.log(tab3);
// //Affichage des éléments dans l'ordre croissant(Du plus petit au plus grans)
// console.log(tab3.sort((a, b) => a - b));

// //Affichage des éléments dans l'ordre décroissant
// console.log(tab3.sort((a, b) => b - a));

//-------------------------------------------------------
//On peut associer les méthodes entre elles

console.log(tab3);
//Affichage des éléments inférieurs à 10 et dans l'odre croissant
//Utilisation simultanée des méthodes filter() et sort()

// console.log(tab3.filter((nombre) => nombre < 10).sort((a, b) => a - b));

//Affichage des éléments inférieurs à 10 et rangés dans l'ordre décroissant

//Utilisation simultanée des méthodes filter() et sort()

console.log(tab3.filter((nombre) => nombre < 10).sort((a, b) => b - a));

//map
tab3.map((element) => {
  console.log(element);
});

//---------------------------------- Méthodes Sur les Objets---------------------------

let personnes = [
  {
    pseudo: "Zenda",
    age: 20,
    technos: ["JavaScript", "PHP", "HTML", "CSS"],
    admin: true,
  },

  {
    pseudo: "Alphonse",
    age: 25,
    technos: ["Python", "C", "C#", "React"],
    admin: true,
  },

  {
    pseudo: "Laurent",
    age: 43,
    technos: ["Angular", "Django", "MySQL"],
    admin: false,
  },
];

document.body.innerHTML = personnes
  .filter(
    (lettre) => lettre.pseudo.includes("a") || lettre.pseudo.includes("A")
  )
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `
<div class="user-card">
    <h2>${user.pseudo}</h2>
    <p>${user.age}</p>
    <p>${user.admin === true ? "Administrateur" : "Pas Administrateur"}</p>
</div>

`
  )
  .join("");
