
const nombre = "angelica";
function Saludar ( parametro )
{
    console.log( `HOLA ${ parametro } estamos en la funcion saludar funcion vieja` )
}
//ejecutar funcion Y MANDAR PARAMETRO
Saludar( nombre );
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7

//UN OBJETO
const objeto1 = {
    nombre: "Maximiliano",
    edad: 0,
}
//OTRO OBJETO
const objeto2 = {
    nombre: "Angelica",
    edad: 19,
}

// OTRA MANERA DE AHCER UNA FUNCION
const Saluda = ( saluda ) =>
{
    console.log( `HOLA PARA ${ saluda.nombre }` )


}
//IMPRIMIMOS MANDAMOS PARAMETRO DEL OBJETO1
Saluda( objeto1 );
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GUARDAMOS OBJETOS EN  ARREGLOPERSONAS
const arregloPersonas = [ objeto1, objeto2 ];

const Admitir = ( param ) =>
{
    if ( param.edad >= 18 )
    {
        console.log( `welcome ${ param.nombre }` )
    } else
    {
        console.log( `No puedes pasar  ${ param.nombre } eres muy pequeño` )
    }


}

//MOSTRAR ASI
arregloPersonas.forEach( ( admite ) =>
{
    Admitir( admite );
} );
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RETORNAR VALOR
const retornar = ( nombre ) =>
{
    if ( nombre === "Maximiliano" )
    {
        return true;
    }
}
const vari = retornar( "Maximiliano" );
console.log( vari );