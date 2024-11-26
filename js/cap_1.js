const pantalla = document.querySelector("#num")
const btnAdd = document.querySelector("#btnAdd")
let count = 1

/* let todosCapitulos = JSON.parse( localStorage.getItem('todosCapitulos') )
localStorage.setItem('todosCapitulos', JSON.stringify( todosCapitulos )) */

console.log(JSON.parse(localStorage.todosCapitulos))

btnAdd.addEventListener( "click", function(){
    pantalla.textContent = count++

    if(count == 4){
        console.log('Habilitaste el cap 2')
        let cap2 = JSON.parse( localStorage.getItem('todosCapitulos') )
        cap2[1].habilitado = true
        localStorage.setItem( 'todosCapitulos', JSON.stringify(cap2) ) 
        console.log(cap2)
    }

} )

// video reproduccion
var PrimeraEscena = document.querySelector('#My-video1')
var SegundaEscena = document.querySelector('#My-video2')
var TerceraEscena = document.querySelector('#My-video3')
var CuartaEscena = document.querySelector('#My-video4')
var QuintaEscena = document.querySelector('#My-video5')
var SextaEscena = document.querySelector('#My-video6')
// otras variables
var CIRCULO1 = document.querySelector('.circulo1')
var CIRCULO2 = document.querySelector('.circulo2')
var CIRCULO3 = document.querySelector('.circulo3')
var CIRCULO4 = document.querySelector('.circulo4')
var CIRCULO5 = document.querySelector('.circulo5')
var CIRCULO6 = document.querySelector('.circulo6')

CIRCULO1.addEventListener("click", PrimeraEscena1)
CIRCULO2.addEventListener("click", PrimeraEscena2)
CIRCULO3.addEventListener("click", PrimeraEscena3)
CIRCULO4.addEventListener("click", PrimeraEscena4)
CIRCULO5.addEventListener("click", PrimeraEscena5)
CIRCULO6.addEventListener("click", PrimeraEscena6)

function PrimeraEscena1() {
    CIRCULO1.classList.add('escondericono')
    PrimeraEscena.play()
}
function PrimeraEscena2() {
    CIRCULO2.classList.add('escondericono')
    SegundaEscena.play()
}
function PrimeraEscena3() {
    CIRCULO3.classList.add('escondericono')
    TerceraEscena.play()
}
function PrimeraEscena4() {
    CIRCULO4.classList.add('escondericono')
    CuartaEscena.play()
}
function PrimeraEscena5() {
    CIRCULO5.classList.add('escondericono')
    QuintaEscena.play()
}
function PrimeraEscena6() {
    CIRCULO6.classList.add('escondericono')
    SextaEscena.play()
}