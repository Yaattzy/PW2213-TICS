console.log("Hola a todos de nuevo");

var mes = "Octubre"
console.log(mes);

var dia = 5;
console.log("dia", dia);

console.log("dias-tipo", typeof(dia));

dia = "cinco";
console.log("dia", dia);

var esFestivo = false;
console.log("esFestivo", esFestivo);

var diaSemana;
diaSemana = null;
console.log("diaSemana", diaSemana);

// Esto es un comentario 

/*
Esto
es 
un 
comentario
en 
bloque
 */

var var1, var2, var3; 

/******DOM*****/
console.dir(document);
document.title = "Nuevo título";
console.log(document.head);

console.log(document.getElementById('titulo'));
var titulo = document.getElementById('titulo');
titulo.textContent = "Javascript de nuevo";
titulo.innerText = "javascript solo";
titulo.innerHTML = "<span>Mi JS</span>";

var items = document.getElementsByClassName('list');
console.log(items[1]);
items[2].innerText = "tres";

var itemsT = document.getElementsByTagName('li');
console.log(itemsT);

/****Funcion***/
function suma(a, b) {
    document.getElementById('resultado').innerText = a + b;
    alert("Hiciste clic en suma");
}

/**Local storage***/

var imprimir = function(dato) {
    document.getElementById('valor').innerText = dato;
}

var aumentar = function() {
    localStorage.contador++;
    imprimir(localStorage.contador);
}

var reiniciar = function() {
    localStorage.contador = 0;
    imprimir(localStorage.contador);
}

var eliminar = function() {
    localStorage.removeItem("contador")
    imprimir(localStorage.contador);
}

if(typeof(Storage) != 'undefined'){
    if(localStorage.contador){ // si existe
        imprimir(localStorage.contador);
    } else {
        localStorage.contador = 0;
    }
}