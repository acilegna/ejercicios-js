const arreglo = [ 1, 5, 4, 100 ];
let suma = 0;

const Suma = ( arreglo ) =>
{
    arreglo.forEach( element =>
    {
        suma = element + suma;
    } );
    return "la suma es:" + suma
}
console.log( Suma( arreglo ) );