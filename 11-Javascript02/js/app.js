/******ECMASCRIPT 6*******/

/*****VARIABLES*******/
// var - Ya no se suele utilizar
// let - variable - mutables
// const - constantes

console.log(uno);
var uno = "variable";
console.log(uno);

// console.log(dos);
let dos = "variable";
console.log(dos);

if(true) {
    var x = "verdadero";
}
console.log(x);

if(true) {
    let y = "verdadero";
    y = "dos"
    console.log(y);
}

var var1 = 1;
var var1 = 2;

let let1 = 1;
// let let1 = 2;

var var2 = 1;
if(true) {
    var var2 = 2;
    console.log(var2);
}
console.log(var2);

let let2 = 1;
if(true) {
    let let2 = 2;
    console.log(let2);
}
console.log(let2);

const tres = "constantes";

/*******VALORES VERDEDAROS Y FALSOS*******+*/

//valores falsos: undefined, null, 0, ''
//valores verdaderos: No valores no falsos

let mes;
mes = null;

if(mes) {
    document.getElementById('texto').innerText = "Verdadero";
} else {
    document.getElementById('texto').innerText = "Falso";
}

/*************OPERADORES DE IGUALDAD***********/

// == (doble igual) - Devuelve verdadero si ambos operandos son iguales

// === (triple igual) - Devuelve verdadero si ambos operandos son iguales
 // y tienen el mismo tipo de dato

mes = 10;

mes === "10" ? console.log("verdadero") : console.log("falso");


/***********TEMPLETE STRING**************/
let nombre = "Jose";
let apellido = "Marquez";
const nacimiento = 1990;

function calcularEdad(nac) {
    return 2021 -nac;
}

console.log(nombre + " " + apellido + ", su edad es: " + calcularEdad(nacimiento));

console.log(`${nombre} ${apellido}, su edad es: ${calcularEdad(nacimiento)}`);

/***********FUNCIONES DE FLECHA***********/
// Funciones más dinamicas y ahorra código

const year = [2000, 2005, 2010, 2020];

// También veremos map
let edad = year.map(function(el){
    return 2021 - el;
});
console.log("edad", edad);

let edadNuevo = year.map((el) => {
    return 2021 - el;
});
console.log("edadNuevo", edadNuevo);

let edadNuevo2 = year.map(x => 2021 - x);
console.log("edadNuevo2", edadNuevo2);

let conca = year.map((x, index) => `La edad no. ${index + 1} es: ${2021-x}`);
console.log("conca", conca);

let nuevoedad = year.map((x, index) => {
    const actual = new Date().getFullYear();
    const edad = actual - x;
    return `La edad no. ${index + 1} es: ${edad}`;
});
console.log("nuevoedad", nuevoedad);





