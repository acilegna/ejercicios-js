/**
 *  Dado un arreglo de números enteros, Imprimir solamente aquellos que
          son denominados números primos, (usar arreglo denominado como
          "ejercicio1").
 */
console.log( "EJERCICIO 1" );
const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];
//3,71,19,13,23

let $contador = 0;

for ( let $indice = 0; $indice < ejercicio1.length; $indice++ )
{
  $elemento = ejercicio1[ $indice ];
  for ( let $serie = 1; $serie < $elemento; $serie++ )
  {
    if ( $elemento % $serie == 0 )
    {
      $contador++;
    }
  }//fin ciclo for2
  //console.log( $contador );

  if ( $contador < 2 )
  {
    console.log( "El numero: " + $elemento + " ES PRIMO " );
    //Reiniciar contador
    $contador = 0;

  } else
  {
    // console.log( "El numero: " + $elemento + " No es primo " );
    //Reiniciar contador
    $contador = 0;

  }

}//fin ciclo1

/**
 *  Ramón quiere hacer una fiesta privada en donde solo entre un número
          exclusivo de personas, ayudale al portero a solo dejar pasar a
          aquellas personas mayores de edad que sean familiares de Ramón. (con
          imprimir los usuarios que se admitirán basta, usar el arreglo
          denominado como "ejercicio2").
 */
const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];
console.log( "EJERCICIO 2" );
//con ciclo FOREACH
ejercicio2.forEach( ( elemento ) =>
{
  //console.log( elemento );
  let edades = elemento.edad;
  let nombres = elemento.nombre;
  edades >= 18 ? console.log( `Permitidos en la fiesta ` + nombres ) : console.log( `No permitidos en la fiesta ` + nombres );

} );

//con ciclo FOR
/*
for ( let $i = 0; $i < ejercicio2.length; $i++ )
{
  //console.log( ejercicio2 );
  let edades = ejercicio2[ $i ][ 'edad' ]
  let nombres = ejercicio2[ $i ][ 'nombre' ];
  edades >= 18 ? console.log( `Permitidos en la fiesta ` + nombres ) : console.log( `No permitidos en la fiesta ` + nombres );
}
*/
/*
Con ayuda de ciclos imprime los primeros 50 números de la suceción de
fibonacci, ( 1, 1, 2, 3, 5, 8, 13, 21 ).*/

console.log( "EJERCICIO 3" );

const fibonacci = [ 0, 1 ];
for ( i = 2; i <= 50; i++ )
{
  fibonacci.push( fibonacci[ i - 1 ] + fibonacci[ i - 2 ] );
  console.log( fibonacci[ i ] );

}


