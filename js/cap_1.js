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

var CIRCULO = document.querySelector('.circulo')

CIRCULO.addEventListener("click", PrimeraEscena1)

function PrimeraEscena1() {
    CIRCULO.classList.add('escondericono')
    PrimeraEscena.play()
}