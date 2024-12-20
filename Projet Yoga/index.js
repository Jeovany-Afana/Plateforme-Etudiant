const main = document.querySelector("main");

let exerciceArray = [
    {pic: 0, min:10},
    {pic: 1, min:1},
    {pic: 2, min:1},
    {pic: 3, min:1},
    {pic: 4, min:1},
    {pic: 5, min:1},
    {pic: 6, min:1},
    {pic: 7, min:1},
    {pic: 8, min:1},
    {pic: 9, min:1}
];

//La classe qui va nous permettre de gérer la logique des exercices
//C'est cette classe qui va gérer le passage d'un exercice à un autre
class Exercice {}


//C'est dans cet objet qu'on va mettre toute les fonctions qui vont être utiles dans notre projet
const utils = {

    pageContent: function(title, content, btn){

        document.querySelector("h1").innerHTML = title;
        main.innerHTML = content;
        document.querySelector('.btn-container').innerHTML = btn;
    }

}

const page = {
    lobby: function(){


        let mapArray = exerciceArray
        .map(
        (exo)=>
        `
        <li>
         <div class="class-header">
         <input type='number' id=${exo.pic} min=1  max="10" value=${exo.min}>
         <span>min</span>
         </div>

         <img src='./img/${exo.pic}.png'>
         
        </li>

        `
        )


        utils.pageContent
        ( `Paramétrage <i id='reboot' class="fas fa-undo"></i>`,
          "<ul>"+ mapArray +"</ul>mapArray",
          `<button id='start'>Commencer<i class="fa fa-play-circle"></i></button>`
        );
       

         },

    routine:function(){

        utils.pageContent("Routine", "Exercices avec Crhono", null)

    },

    finish: function(){

        utils.pageContent
        (
        "C'est terminé !",
         "<button id='start'> Recommencer</button>",
         "<button id='reboot' class='btn-reboot'>Rénitialiser<i class='fas fa-times-circle'></i></button>"
        );

    }
}

page.lobby();
