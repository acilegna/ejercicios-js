/******************************************EJERCICIO 1******************************************************************** */
console.log( "EJERCICIO 1" );
const ejercicio1 =
  [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29, 19, 88, 456, 13, 23, 24,
  ];
let contador = 0;

const esPrimo = () =>
{
  //ciclo para recorrer el arreglo
  for ( let indice = 0; indice < ejercicio1.length; indice++ )
  {
    //guardar elementos del arreglo en variable
    let elemento = ejercicio1[ indice ];
    //ciclo for para sacar la cantidad de elementos divisores de los elementos del arreglo
    for ( let serie = 1; serie < elemento; serie++ )
    {
      //validar si el resto de su división es cero
      if ( elemento % serie == 0 )
      {
        //aumenta contador por cada resultado igual a cero
        contador++;
      }
    }

    // si contador es mayor a 2 y el elemento del arreglo es mayor a 1 entonces arroja este resultado
    if ( contador < 2 && elemento > 1 )
    {
      console.log( "El numero: " + elemento + " ES PRIMO " );
      //Reiniciar contador para que inicialice desde 0 con cada elemento del arreglo despues de sacar el total de su operacion
      contador = 0;
    }
    //de lo contrario a la condicion anterior da este resultado
    else
    {
      console.log( "El numero: " + elemento + " No es primo " );
      //Reiniciar contador para que inicialice desde 0 con cada elemento del arreglo despues de sacar el total de su operacion
      contador = 0;
    }

  }//fin ciclo1
}
//ejecutar funcion
esPrimo();
/******************************************EJERCICIO 2******************************************************************** */
console.log( "EJERCICIO 2" );

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

//FUNCION SACAR PERSONAS PERMITIDAS
const sonPermitidos = () =>
{
  //con ciclo FOREACH
  ejercicio2.forEach( ( elemento ) =>
  {
    //console.log( elemento );
    let edades = elemento.edad;
    let nombres = elemento.nombre;
    edades >= 18 ? console.log( `Permitido en la fiesta ` + nombres ) : console.log( `No permitido en la fiesta ` + nombres );

  } );
}

//ejecutar funcion
sonPermitidos();

//con ciclo FOR
/*
const sonPermitidos = () =>
{
  for ( let $i = 0; $i < ejercicio2.length; $i++ )
  {
    //console.log( ejercicio2 );
    let edades = ejercicio2[ $i ][ 'edad' ]
    let nombres = ejercicio2[ $i ][ 'nombre' ];
    edades >= 18 ? console.log( `Permitidos en la fiesta ` + nombres ) : console.log( `No permitidos en la fiesta ` + nombres );
  }
}
*/
/******************************************EJERCICIO 3******************************************************************** */


console.log( "EJERCICIO 3" );
const fiboNaci = () =>
{
  const fiboInicial = [ 0, 1 ];
  for ( i = 2; i <= 50; i++ )
  {
    fiboInicial[ i ] = fiboInicial[ i - 2 ] + fiboInicial[ i - 1 ];

  }
  console.log( fiboInicial );
}

fiboNaci();

