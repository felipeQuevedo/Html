//programa que valida temperatura
//valida temperatura
//2/08/22 autor:Steven

var temperatura=prompt("Digite temperatura")
if(temperatura>=0 && temperatura<=10){
    console.log ("Actualmente tiene una temperatura fria")
}
else if(temperatura>=11 && temperatura<=18){
    console.log ("Actualmente tiene una temperatura templada")
}
else if(temperatura>=19 && temperatura<=24){
    console.log ("Actualmente tiene una temperatura calida")
}
else {
    console.log ("Temperatura fuera de rango")
}


//var estudiante=true
//var trabajador=false
//
//if(estudiante  && trabajador){
//    console.log("Tienes acceso");
//}
//else if()
//else if(!trabajador && !estudiante){
//    console.log("No tienes acceso");
//}/

