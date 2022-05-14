// Tarea 1 - Crea un algoritmo utilizando un ciclo. (Desafío complementario)


/* let juego = prompt ("Que numero de camiseta usaba Leo Gutierrez?. Pista: del 1 al 10");

while (juego != "10"){
    console.log("El hincha ingreso " + juego);
    juego = prompt ("Error, sigue participando")
}
console.log("Correcto, Leo Gutierrez usaba la camiseta numero 10" );
    alert("Correcto, Leo Gutierrez usaba la camiseta numero 10");
 */




// Tarea 2 -- Desafío: Simulador interactivo. (Desafío entregable.)

// Simulador de compra de productos (camisetas de Basquet)

/* function Producto(camiseta, precio) {
    this.camiseta = camiseta;
    this.precio = precio;
    this.cantidad = 0;
}

const producto1 = new Producto("Camiseta1", 500);
const producto2 = new Producto("Producto2", 400);
const producto3 = new Producto("Producto3", 700);

let subTotal = 0;

function start() {
    let select = parseInt(prompt("Camisetas disponibles: \n\t ingresa el número de la camiseta que queres comprar: \n\n 1 - Camiseta titular $500 \n 2 - Camiseta suplente $400 \n 3 - Camiseta retro año 93/94 $700 \n\n 9- Finalizar compra \n 0- Salir"));
    cantidad(select);
}

function cantidad(select) {
    if(select === 9) return total(subTotal);
    if(select === 0) return alert("Volvé cuando quieras campeón!!");
    let cuantas = parseInt(prompt("Cuántas vas a llevar?"));
    switch (select) {
        case 1:
            subTotal += producto1.precio * cuantas;
            break;
        case 2:
            subTotal += producto2.precio * cuantas;
            break;
        case 3:
            subTotal += producto3.precio * cuantas;
            break;
    }
    start();
}

function total(subTotal) {
    if(subTotal === 0) {
        alert("Tu carrito está vacío. \n Selecciona un producto de la lista");
        return start();
    }
    alert("El total a pagar es: $" + subTotal);
    alert("Gracias por tu compra");
}

start(); */



// Tarea 3 -- DESAFÍO COMPLEMENTARIO: Incorporar Arrays


// Simulador de compra de productos (camisetas de Basquet)

/* function Producto(camiseta, precio) {
    this.camiseta = camiseta;
    this.precio = precio;
    this.cantidad = 0;
}  */

//Array



/* const producto1 = {
    nombre: "Camiseta Titular",
    precio: 500
}
const producto2 = {
    nombre: "Camiseta suplente",
    precio: 400
}
const producto3 = {
    nombre: "Camiseta retro",
    precio: 700
}

const camisetas = [producto1, producto2, producto3]
console.log(camisetas);

let subTotal = 0;

function start() {
    let select = parseInt(prompt("Camisetas disponibles: \n\t ingresa el número de la camiseta que queres comprar: \n\n 1 - Camiseta titular $500 \n 2 - Camiseta suplente $400 \n 3 - Camiseta retro año 93/94 $700 \n\n 9- Finalizar compra \n 0- Salir"));
    cantidad(select);
}

function cantidad(select) {
    if(select === 9) return total(subTotal);
    if(select === 0) return alert("Volvé cuando quieras campeón!!");
    let cuantas = parseInt(prompt("Cuántas vas a llevar?"));
    switch (select) {
        case 1:
            subTotal += producto1.precio * cuantas;
            break;
        case 2:
            subTotal += producto2.precio * cuantas;
            break;
        case 3:
            subTotal += producto3.precio * cuantas;
            break;
    }
    start();
}

function total(subTotal) {
    if(subTotal === 0) {
        alert("Tu carrito está vacío. \n Selecciona un producto de la lista");
        return start();
    }
    alert("El total a pagar es: $" + subTotal);
    alert("Gracias por tu compra");
}

start(); */




// Tarea 4 -- Primera Entrega del Proyecto Final



class productos {
    constructor (camiseta, precio){
        this.camiseta = camiseta;
        this.precio = precio;
        
    }
}

//Array

const producto1 = {
    nombre: "Camiseta Titular",
    precio: 500
    
}
const producto2 = {
    nombre: "Camiseta suplente",
    precio: 400
}
const producto3 = {
    nombre: "Camiseta retro",
    precio: 700
    
}

const camisetas = [producto1, producto2, producto3]
console.log(camisetas);

let subTotal = 0;

function start() {
    let select = parseInt(prompt("Camisetas disponibles: \n\t ingresa el número de la camiseta que queres comprar: \n\n 1 - Camiseta titular $500 \n 2 - Camiseta suplente $400 \n 3 - Camiseta retro año 93/94 $700 \n\n 9- Finalizar compra \n 0- Salir"));
    while (select > 3) {
        select = parseInt(prompt("Camisetas disponibles: \n\t ingresa el número de la camiseta que queres comprar: \n\n 1 - Camiseta titular $500 \n 2 - Camiseta suplente $400 \n 3 - Camiseta retro año 93/94 $700 \n\n 9- Finalizar compra \n 0- Salir"));
        cantidad(select);
    }
    
}

function cantidad(select) {
    if(select === 9) return total(subTotal);
    if(select === 0) return alert("Volvé cuando quieras campeón!!");
    let cuantas = parseInt(prompt("Cuántas vas a llevar?"));
    switch (select) {
        case 1:
            subTotal += producto1.precio * cuantas;
            break;
        case 2:
            subTotal += producto2.precio * cuantas;
            break;
        case 3:
            subTotal += producto3.precio * cuantas;
            break;
    }
    /* start(); */
}

function total(subTotal) {
    if(subTotal === 0) {
        alert("Tu carrito está vacío. \n Selecciona un producto de la lista");
        return start();
    }
    alert("El total a pagar es: $" + subTotal);
    alert("Gracias por tu compra");
}

start();