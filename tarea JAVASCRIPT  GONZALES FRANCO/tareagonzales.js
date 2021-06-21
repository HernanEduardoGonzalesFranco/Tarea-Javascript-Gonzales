//Sintaxis del lenguaje variables y tipos de datos
console.log("Funcionando.....")
var numero=10
let num1; //undefined
let num2= null // nulo
let entero=10
let decimal=1.2
let string="hello world"
let booleano=false
let fecha=new Date()
let dd=fecha.getDate(),
    mm=fecha.getMonth()+1,
    aa=fecha.getFullYear(),
    hoy=`${aa}/${mm}/${dd}`
const pi=3.1416 //constante
console.log("Numero1 =", num1)
console.log(`Numero2=${num2}`)
console.log(`fecha hoy=${fecha}`)
console.log(hoy)
// arreglos, json y objetos
let numeros =[1,2,3,4,5];
let colores =["azul", "violeta", "blue"];
const json={
    "nombres": ["Angela", "Alexandra"],
    "genero": "Femenino"
};
const student={
    nombre: "Hernan",
    genero: "Masculino",
    juegos: ['Futbol', 'Indor', 'Basquet'],
    conocimientos:{
        lenguajes:[
            'Java', 'Python', 'Javascript',
        ],
        Niveles_Aprobados:{Nivel1:'Algoritmo de Programacion',
        Nivel2:'Tecnica de Programacion', Nivel3:'Modelamiento de Software',
        Nivel4:'Programacion orientada a Objetos', 
        Nivel5:'Construccion de Software'}
    }
}
json.genero="Masculino"
student.nombre="Hernan"
student.edad=22
console.log('Json',json,json.genero);
console.log('Objeto',student.conocimientos.lenguajes[2], student.conocimientos.Niveles_Aprobados.Nivel4);
//ESTRUCTURA DE CONTROL
let n1=4
let n2=5
if(num1===undefined)
   console.log(`${num1}=undefined`);
if(num2===null)
   console.log(`${num2}=null`);
if(n1===0){
    console.log(n1);
}else if(n1==n2){
    console.log(`${n1}=${n2}`);
}else{
    console.log(`${n1}!=${n2}`);
}
//switch
let nume=5
let rec=nume % 2;
switch (rec){
    case 0:
        console.log(`${rec}-${nume} es par`);
        break;
    case 1:
        console.log(`${rec}-${nume} es impar`);
        break;
    default:
        if(isNaN(rec))
           console.log(`${rec}=ERROR`);
        break;
}
console.log("Sali del switch")
//bucles de incremento**
//while
let  i=0
console.log("Bucle while",colores)
/*while(i<colores.length&& colores[i] !="blue"){
    console.log(i,colores[i])
    i=i+1
}*/
//FOR
/*console.log("recorrido for incremento",colores);
for(let i=0;i<colores.length;i++){
    console.log(i,colores[i]);
}
//in
console.log("Recorrido for in",colores)
for(let j in colores){
    console.log(j,colores[j])
}
//of
console.log("Recorrido for of",colores)
for(let color of colores){
    console.log(color)
}*/
let nomb="Hernan"
for(let caracter of nomb){
    //console.log(caracter)
}
const Personas=[
    {"Nombre": "Fabricio", "Apellidos": "Gonzales"},
    {"Nombre": "Angel", "Apellidos": "Franco"},
    {"Nombre": "Eduardo", "Apellidos": "Morerira"},
]
console.log("of");
for(let persona of Personas){
    //console.log(persona,persona.Nombre);
}
//recorridos de objetos iterables
//console.log("Foreach");
Personas.forEach(persona=>{
    if (persona.Nombre!="Eduardo")
    console.log(persona.Nombre)
})
//map sirve para leer un objeto y extraer algo de ese objeto
const persons=Personas.map(person=>person.Nombre)
console.log("Map",persons);
//filter sirve para filtrar los objetos y presente solo la condicion dada
const person=Personas.filter(person=>person.Nombre!="Eduardo")
console.log("Filter", person);
//Find sirve para presentar solo aquel dato que cumple la condicion
const onePerson=Personas.find(person=>person.Nombre==="Eduardo")
console.log("Find", onePerson);
//manejo de funciones
function sumar() {
    console.log(5 + 2);
}
sumar()
const suma = () => console.log(5+2)
suma()
function multiplicar(nq, n2){
    return n1 * n2
}
let resp= multiplicar(5,2 )
console.log("Sin arrow", resp);
const multi = (n1, n2) => n1 * n2 
console.log(multi(5,2));
function dividir(n1,n2=4) {
    let resp = 0
    try {
        resp = n1 / n2
    } catch (e) {
        console.log("Ha ocurrido un error: ", e.message)
    }
    return resp
}
resp = dividir(8)
console.log(resp);
resp = dividir(8,0)
console.log(resp);
const divi = (n1, n2 = 4) => {
    let resp = 0
    try {
        resp = n1 / n2
    } catch (e) {
        console.log("Ha ocurrido un error: ", e.message)
    }
    return resp
}
console.log(divi(8));
// fetch. sirve para consumir api(respuesta del servidor que entrega una resouesta con datos para ser 
//consumidos)
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(datos => {
        //console.log(datos.results)
        //datos.results.forEach(poke=> console.log(poke.name,poke.url))
    }) 
    .catch(error => console.log
        ("Error del Api: ", error))   
// async await: devuelve un objeto asincronico
const obtenerDatos = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos = await res.json()
        //console.log("Async await");
        //datos.results.forEach(poke => console.log(poke.name, poke.url))
    } catch (error) {
        console.log("Error del Api con async: ", error)
    }
}
obtenerDatos()
//DOM
let contenido = document.getElementById('contenedor')
let variable = document.getElementById('variable')
console.log(contenido);
console.log(variable);
variable.innerHTML = 'Enteros, Decimales, String, Boleanas, fechas';
variable.style.color = "red"
variable.style.background = "#000"
console.log(variable); 
let concepto = document.querySelector('.concepto')
//console.log(concepto);
//concepto.innerHTML = "Area de memoria"
let conceptos = document.querySelectorAll('.concepto')
let cont = 1
conceptos.forEach(parrafo => {
    parrafo.innerHTML = `Area de memoria#${cont}`
    cont = cont + 1
})
console.log(conceptos);
//eventos
let boton = document.getElementById('boton2')
let valor = document.getElementById('valor')
boton.addEventListener('mouseover', () => {
    console.log("has pasado el mouse");
})
boton.addEventListener('click', () => {
    let nodo = document.createElement ("p")
    nodo.innerHTML = "nuevo elemento"
    nodo.style.color = "red"
    contenido.appendChild(nodo)
})
valor.addEventListener('keypress', (e) => {
    console.log(e.target.value);
})


