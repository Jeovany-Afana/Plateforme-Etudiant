//On pointe d'abord le main (Vu que c'est lui qui va contenir nos cartes)
const main = document.querySelector("main");

//On crée une variable qui va stocker tous nos exercies
//En sachant que notre carte elle a une image, un nombre de minute qui leur soit adosser

let exerciceArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 2, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];

//Structure de notre projet

//On se crée une classe (Qui va être le générateur d'exercices)
//C'est cette classe qui va gérer le passage d'un exercice à l'autre

class Exercice {}

//On crée un objet 'utils' dans lequel on va mettre toute nos fonction qui vont être utiles dans notre projet
const utils = {
  pageContent: function (title, content, btn) {
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },

  handleEventMinutes: function(){
    document.querySelectorAll('input[type="number"]').forEach((input)=>{
      input.addEventListener("input", (e)=>{
        exerciceArray.map((exo)=>{
          if (exo.pic == e.target.id) {
            exo.min = parseInt(e.target.value);
            console.log(exerciceArray)
          }
        })
      })
    })
  },

  handleEventArrow: function(){

    document.querySelectorAll(".arrow").forEach((arrow)=>{
      arrow.addEventListener('click', (e)=>{
        let position = 0; //Variable qui va nous permettre de trouver la positon de l
        exerciceArray.map((exo)=>{
          if (exo.pic == e.target.dataset.pic && position !== 0) {
            [exerciceArray[position], exerciceArray[position -1 ]] = [exerciceArray[position -1], exerciceArray[position]]
             page.lobby();
            
          } else{
            position++;
            
          }
        })

      })
    })

  },

  deleteItems: function(){
    document.querySelectorAll(".deleteBtn").forEach((btn)=>{
      btn.addEventListener("click", (event)=>{
        let newArr = []; 
        exerciceArray.map((exo)=>{
          if(exo.pic != event.target.dataset.pic){
            newArr.push(exo);
          }
        });
        exerciceArray = newArr;
        page.lobby();

      })
    })
  }, 

  reboot : function()
  {
    
  }
};

//On crée un objet 'page' dans lequel on va mettre toutes nos pages (Vues)
const page = {
  lobby: function () {

    let mapArray = exerciceArray
    .map(
      (exo)=>
      `
      <li>

      <div class="card-header">
        <input type="number" id=${exo.pic} min=1 max="10" value=${exo.min} />
        <span>min</span>
        </div>
        <img src="./img/${exo.pic}.png" />
        <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
        <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
      
      </li>

      `

    ).join('');

    utils.pageContent(
      "Paramétrage <i id='reboot' class='fas fa-undo'></i>",
      "<ul>"+ mapArray + "</ul>",
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"

    );
    utils.handleEventMinutes();
    utils.handleEventArrow();
    utils.deleteItems();
    reboot.addEventListener('click', utils.reboot())
  },

  routine: function () {
    utils.pageContent(
      "Routine", "Exercice avec chrono", null
    )
  },

  finish: function () {
    utils.pageContent(
      "C'est terminé !",
      "<button id='start'>Recommencer</button>",
      "<button id='reboot' class='btn-reboot'>Rénitialiser<i class='fas fa-times-cicle'></i></button>"
    )
  },
};

page.lobby();
