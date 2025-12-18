        // alert("hello world");
        // console.log("hello console");
        // Ceci est un commentaire en JavaScript
        /* Ceci est un commentaire
           sur plusieurs lignes
        */
       let x = 10;
       let y = 10;
       let z="10";
       

    //    alert(y);
       console.log(y);
    //    let age;
    //    age = 25;
        // let nom = "John";
    
       const PI = 3.14;
    //    console.log(typeof nom);

// console.log(y%x)

// console.log(x===z)

// let nom=prompt("entrez votre nom");

// alert(`Bonjour ${nom}, bienvenue!`);

// >=
// <=
// ==
// ===
// !=

// conditions
let age = 60;

// if (age < 18) {
//   console.log("Tu es mineur.");
// } else if (age >= 18 && age < 60) {
//   console.log("Tu es adulte.");
// }
// else {
//   console.log("Tu es sénior.");
// }
switch (age) {
  case age >= 60:
    // console.log("Tu es sénior.");
    break;
  case age >= 18 && age < 60:
    // console.log("Tu es adulte.");
    break;
    
  default:
    // console.log("Tu es mineur.");
    break;
}

for (let i = 1; i <= 5; i++) {
  // console.log("bonjour");
  // console.log("Tour de boucle :", i);
}
let compteur = 0;
while (compteur < 3) {
  console.log("Compteur :", compteur);
  compteur++;
}

// let nombre;
// do {
//   nombre = Number(prompt("Entrez un nombre supérieur à 10 :"));
// } while (nombre <= 10);

// console.log("Merci, nombre accepté :", nombre);


// let nbr1=Number(prompt("entrez un nombre"));
// let nbr2=Number(prompt("entrez un autre nombre"));
// let operateur=prompt("entrez un opérateur (+, -, *, /,%)");

// if(operateur==="+"){
//     console.log(nbr1+nbr2);
// }else if(operateur==="-"){
//     console.log(nbr1-nbr2);

// }
// switch (operateur) {
//     case "+":
//         console.log(nbr1+nbr2);
//         break;
//     case "-":
//         console.log(nbr1-nbr2);
//         break;
//     case "*":
//         console.log(nbr1*nbr2);
//         break;
//     case "/":
//         console.log(nbr1/nbr2);
//         break;
//     case "%":
//         console.log(nbr1%nbr2);
//         break;
//     default:
//         console.log("operateur incorrect");
//         break;
// }

// for(let i = 1; i <= 20; i++) {
//   if(i % 3 === 0) {
//     console.log("Fizz");
//   }else if(i % 5 === 0) {
//     console.log("Buzz");
//   }
//   else if(i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
// }

// alert(5*"2");

// let table=Number(prompt("entrez une table de multiplication"));

// for(let i=1;i<=10;i++){
//   console.log(table + " * " + i + " = " + (table * i));
// }

//let nombre=Number(prompt("entrez un nombre pour calculer"));
// let nombre;
// do{
// nombre=Number(prompt("entrez un nombre pour calculer"));
// console.log(nombre);
// }while(nombre!==0);


// i=i+1
// let secret=Math.floor(Math.random()*100)+1;
// let test;
// function tester(a,b) {
//   if(a>b){
//     console.log("plus grand");
//   }else if(a<b) {
//     console.log("plus petit");
//   }
// }

// do{
// test=Number(prompt("devinez le nombre entre 1 et 100 "+secret)); 
// tester(test,secret);
// }while(test!==secret);

// function carre(nombre){
//   console.log(nombre*nombre);
// }
// let resultat=carre(5);
// console.log(resultat);
// carre(7);
// carre(12);
// carre(20);

// let carre2 = function(nombre){}

// let carre3=(nombre)=>{

// }
// let paire=(nombre)=>{
//   if(nombre%2===0){
//     return ;
//   }else{
//     return false;
//   }
// }
// console.log(paire(4));
// console.log(paire(7));



let couleurs=["rouge","vert","bleu"];
console.log(couleurs);
// couleurs.push("jaune"); 
console.log(couleurs.length);
console.log(couleurs[0]) ;

// let tab=[1,2,3,4,5];
 
function additionnerTableau(tab){
 let somme=0;
  for(let i=0;i<tab.length;i++){
    somme=somme+tab[i];
  }
  return somme;
}
let tab2=[5,10,15];
let addtab=additionnerTableau([1,2,3,4,5]);
let addtab2=additionnerTableau([10,20,30]);
let addtab3=additionnerTableau(tab2);

console.log("La somme est :",addtab2);



let bouton = document.getElementById("btn");
let msg = document.getElementById("msg");
// let body= document.querySelector("body");

bouton.addEventListener("click", function() {
  msg.textContent = "Tu as cliqué !";
 document.body.style.backgroundColor = "lightblue";
 
});

let nomInput = document.getElementById("nom");
let envoyerBtn = document.getElementById("envoyer");
let liste = document.getElementById("liste");

envoyerBtn.addEventListener("click", () => {

let li = document.createElement("li");
li.textContent = nomInput.value;
li.style.color = "green";
liste.appendChild(li);
nomInput.value = "";
});
let citetions = [
  "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès.",
  "La vie est ce qui arrive quand on est occupé à faire d'autres projets.",
  "Ne jugez pas chaque jour à la récolte que vous faites, mais aux graines que vous plantez.",
  "Le seul endroit où le succès vient avant le travail, c'est dans le dictionnaire."
];
citetions[0];
