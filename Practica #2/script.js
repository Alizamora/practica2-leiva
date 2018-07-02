// Práctica #2
/* Calcular total a pagar, pidiendo el sueldo, horas extra y categoría */

//Pedimos su salario
let salario = prompt('Ingrese su salario');

//Pedimos horas extra trabajadas
let horasExtra = prompt('Ingrese horas extra trabajadas');

//Pedimos en que categoría esta (1, 2, 3, 4)
let categoria = prompt('Ingrese el tipo de categoría (1, 2, 3, 4)');

let total;

let salario1 = parseInt (salario);
let horasExtra1 = parseInt (horasExtra);
let categoria1 = parseInt (categoria);


// Utilizo switch para poner los casos  

let PrecioDeHora;
switch (categoria1) {
    case 1:
        PrecioDeHora = 30;
        break;
    case 2:
        PrecioDeHora = 38;
        break;
    case 3:
        PrecioDeHora = 50;
        break;
    case 4:
        PrecioDeHora = 0;
        break;
    default:
        break;
}

// Pongo una condición

//si es menor o igual a 30 
if (horasExtra1 < 30){
    total = salario1 + (horasExtra1 * PrecioDeHora);
    console.log('Su salario es '+ total);
} else {
    total = salario1 + (30 * PrecioDeHora);
    console.log('Su salario es ' + total)
}
