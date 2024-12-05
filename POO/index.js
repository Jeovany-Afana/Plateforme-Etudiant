const obj = {
    pseudo: "Papiico",
    ville: "Thies",
    admin:false
}

//Ajouter un paramètre
obj.adresse = "Lalale"
obj["admin"] = true


// console.log(typeof obj);//ça affiche object dans la console

// let array = [1, 2, 3]
// console.log(typeof array); //ça affiche object

// console.log(document.body);
// console.log(typeof document.body)
// console.log(typeof null)

//Supprimer un élément en utilisant (delete)
delete obj.adresse

// //Interroger pour savoir si une certaine propriété existe
// console.log("pseudo" in obj)//Renvoie true
// console.log("adresse" in obj)//Affiche false

// //Parcourir un objet
// for (const key in obj) {
//    console.log(key)
// }

// //Pour afficher les valeurs de l'objet 

// for(const key in obj){
//     console.log(obj[key]);
// }

//AJOUTER DES METHODES A UN OBJET

// const newObj = {
//     pseudo: "Mohamed",
//     age: 25,

//     direBonjour(){
//         console.log("Salut !")
//     }
// }

// newObj.direBonjour()

//--------------------------------Le THIS----------------------------------

const newObj = {
    pseudo: "Mohamed",
    age: 25,

    direBonjour: function (){
        console.log(`Salut je m'appelle ${this.pseudo}`)
    }
}

// newObj.direBonjour()

//----------------------LES METHODES NATIVES(présentent dans le code source de JavaScript) pour nous aider avec les objets

//Obtenir les clés d'un objet
// const keys = Object.keys(newObj)
// console.log(keys);

// //Obtenir les valeurs de l'objet
// const values = Object.values(newObj);
// console.log(values)

// //
// const restArray = Object.entries(obj);
// console.log(restArray)

// //On peut fusionner les objets

// const fusion = Object.assign({}, obj, newObj);
// console.log(fusion);

//Empecher les modifications

//Seal() on peut modifier les valeurs des paramètres mais on ne peut pas ajouter des paramètres
// const otherObject = Object.seal(obj);


//---------------------------CONSTRUIRE DES OBJETS------------------------
//Fonction constructeur

//Elle sert à construire des objets
// function User(pseudo, ville){
//     this.pseudo = pseudo;
//     this.ville = ville;
// }

// const user1 = new User("Joe", "Thiès"); //Ceci est une instance de l'objet User

// console.log(user1);

// const user2 = new User("Papiico", "Dakar");//On créer une nouvelle instance
// console.log(user2);

//Ajoutons une méthodes

// function User(pseudo, ville){
//     this.pseudo = pseudo;
//     this.ville = ville;

//     this.getCity = function () {
//         console.log(`${this.pseudo} habite à ${this.ville}`);
        
//     }
// }

// const user1 = new User("Joe", "Thiès"); //Ceci est une instance de l'objet User
// const user2 = new User("Papiico", "Dakar");//On créer une nouvelle instance

// user1.getCity();
// user2.getCity();

// //------------------------Factory Functions----------------------

// function User3(pseudo, ville) {
//     return{
//         pseudo: pseudo,
//         ville: ville
//     }
    
// }

// //Ici on a pas besoin de faire un NEW
// const user4 = User3('Christine', "Dakar");
// console.log(user4);

//---------------------CLASS (Méthode la plus utilisée)-----------------------

// class Utilisateur {
//     constructor(pseudo, ville){
//         this.pseudo = pseudo;
//         this.ville = ville;
//     }
// }

// const user5 = new Utilisateur("Kitty", "Bamako");
// console.log(user5);

//Ajout d'une méthode
class Utilisateur {
    constructor(pseudo, ville){
        this.pseudo = pseudo;
        this.ville = ville;
    }

    sayMyName = function () {
        console.log(`Bonjour je suis ${this.pseudo}`);
        
    }
}

const user5 = new Utilisateur("Kitty", "Bamako");
user5.sayMyName()
// console.log(user5);

//On peut ajouter une méthode en passant par le prototype

Utilisateur.prototype.sayCity = function (){
    console.log(`J'habite à ${this.ville}`);
    
}
// user5.sayCity();

// //On peut ajouter pleins de prototypes d'un coup

// Object.assign(Utilisateur.prototype, {
//     methode1(){
//         //Ma méthode
//     },

//     methode2(){
//         //Ma méthode
//     }
// })

// console.log(user5);

//--------------------------------L'HERITAGE----------------------------

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age
        
    }

    saySomething(text){
        console.log(this.name + "dit : "+ text);
        
    }
}

class Dog extends Animal {
    run(){
        console.log("Le chien court !");
        
    }
}

const rintintin = new Dog("Rintintin", 9)
console.log(rintintin);
rintintin.run();













