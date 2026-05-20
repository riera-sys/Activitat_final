let nom = "Anna";
let edat = 20; 
let botoEdat = document.getElementById("botoEdat");

botoEdat.addEventListener("click", function(){
    let edatUsuari = prompt("Quina edat tens?");
    if(edatUsuari >= 18){
        document.getElementById("resultat").innerHTML =
        "Ets major d'edat";
        
    }else{
        document.getElementById("resultat").innerHTML =
        "Ets menor d'edat";
    }
});


function saludar(nom){
    return "Hola " + nom;
}


let botoSaludar = document.getElementById("botoSaludar");
botoSaludar.addEventListener("click", function(){
    let nomUsuari =
    document.getElementById("nomInput").value;
    document.getElementById("salutacio").innerHTML =
    saludar(nomUsuari);
});


let botoText = document.getElementById("botoText");
botoText.addEventListener("click", function(){
    document.getElementById("text").innerHTML =
    "Text canviat";
});


let boto = document.getElementById("boto");
boto.addEventListener("click", function(){
    document.getElementById("missatge").innerHTML =
    "Has fet clic!";
});


let numeros = [1,2,3];
console.log(numeros);
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}


let numeroRandom = Math.random();
console.log(numeroRandom);

let text = "JavaScript";
console.log(text.length);

let data = new Date();
console.log(data);