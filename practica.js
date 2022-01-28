//variables y cosntantes
//let consume mas memoria que const porque let cambia  y no se sabe el tamaño que tendra
//tipo de dato string, nuemrico y boleano
const nombre = "angelica";
let edad = 23;
let desicion = false;

let condicion = edad > 20;
console.log( "ES " + condicion );
console.log( nombre + " " + edad );

//si 
if ( desicion )
{
    console.log( "se cumple condicion" );
} else
{
    console.log( `No SE cmple ${ nombre }` );
}
//OTRA MANERA DE ESRIBIR IF ELSE MAS NUEVO

desicion ? console.log( "se cumple ESTA condicion" ) : console.log( `No SE CUMPLE ${ nombre }` );
/**
UN = ES UNA ASIGNACION
    let numero1=20;
    let numero2="20"
DOS == ES PARA COMPARAR VALOR
    $res=numero1 == "20" 

TRES=== ES COMPARAR VALOR Y TIPO DE DATO
$res=numero1 === "20" 
 */
let numero1 = 20;

console.log( numero1 == "20" );
console.log( numero1 === "20" );
/***********************************************************************************************++WHILEE */
let contador = 2;
while ( contador < 10 )
{
    console.log( contador );
    contador++;
}

/****************************************************************************** */
console.log( fiboInicial );


const $arreglo = [ 10, 1, 4 ];
for ( $i = 0; $i < $arreglo.length; $i++ )
{
    for ( $j = 0; $j < $arreglo.length - 1; $j++ )
    {
        if ( $arreglo[ $j ] > $arreglo[ $j + 1 ] )
        {
            $temporal = $arreglo[ $j ];
            $arreglo[ $j ] = $arreglo[ $j + 1 ];
            $arreglo[ $j + 1 ] = $temporal;
        }
    }
}
console.log( $arreglo );