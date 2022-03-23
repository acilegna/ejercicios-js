let num1 = 2;
let num2 = 5;
let suma = 0;

const sumaEnteros = ( numero1, numero2 ) =>
{
    suma = numero1 + numero2;
    return "la suma es: " + suma;
}
console.log( sumaEnteros( num1, num2 ) );