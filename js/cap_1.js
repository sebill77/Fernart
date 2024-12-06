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

let FLECHA = document.querySelector('.carousel-control-next')
let FLECHA2 = document.querySelector('.carousel-control-prev')
const carruselItems = document.querySelectorAll(".carousel-item")

FLECHA2.addEventListener("click", quitaresconde)

function quitaresconde () {
    CIRCULO1.classList.remove('escondericono')
    CIRCULO2.classList.remove('escondericono')
    CIRCULO3.classList.remove('escondericono')
    CIRCULO4.classList.remove('escondericono')
    CIRCULO5.classList.remove('escondericono')
    CIRCULO6.classList.remove('escondericono')
}

let e = 1

let visto = false 

carruselItems.forEach( (e) => {
    if(e.classList.contains("active") ){
        FLECHA.style.display = "none"
        FLECHA2.style.display = "none"
    }
} )

function PrimeraEscena1() {
    CIRCULO1.classList.add('escondericono')
    PrimeraEscena.play()



    if ( e == 1 ){
        FLECHA2.style.display = "none"
        let intervalo = setInterval( () => {
             if(PrimeraEscena.currentTime > 7){
                 FLECHA.style.display = "block"
                 console.log("ya sirve flecha 1")
                 clearInterval(intervalo)
             }
        }, 1000 )
    }
    e = 2
    visto = true 
}
function PrimeraEscena2() {
     FLECHA.style.display = "none"
    CIRCULO2.classList.add('escondericono')
    SegundaEscena.play()
    if ( e == 2 ){
        let intervalo = setInterval( () => {
             if(PrimeraEscena.currentTime > 8){
                 FLECHA.style.display = "block"
                 console.log("ya sirve flecha 2")
                 clearInterval(intervalo)
             }
        }, 1000 )
    }
    e = 3
    visto = true 
}
function PrimeraEscena3() {
    CIRCULO3.classList.add('escondericono')
    TerceraEscena.play()
    if ( e == 3 ){
        let intervalo = setInterval( () => {
             if(PrimeraEscena.currentTime > 7){
                 FLECHA.style.display = "block"
                 console.log("ya sirve flecha 3")
                 clearInterval(intervalo)
             }
        }, 1000 )
    }
    e = 4
    visto = true 
}
function PrimeraEscena4() {
    CIRCULO4.classList.add('escondericono')
    CuartaEscena.play()
    if ( e == 4 ){
        let intervalo = setInterval( () => {
             if(PrimeraEscena.currentTime > 6){
                 FLECHA.style.display = "block"
                 console.log("ya sirve flecha 4")
                 clearInterval(intervalo)
             }
        }, 1000 )
    }
    e = 5
    visto = true 
}
function PrimeraEscena5() {
    CIRCULO5.classList.add('escondericono')
    QuintaEscena.play()
    if ( e == 5 ){
        let intervalo = setInterval( () => {
             if(PrimeraEscena.currentTime > 2){
                 FLECHA.style.display = "block"
                 console.log("ya sirve flecha 5")
                 clearInterval(intervalo)
             }
        }, 1000 )
    }
    e = 6
    visto = true 
}
function PrimeraEscena6() {
    CIRCULO6.classList.add('escondericono')
    SextaEscena.play()
    if ( e == 6 ){
        let intervalo = setInterval( () => {
             if(PrimeraEscena.currentTime > 4){
                 FLECHA.style.display = "block"
                 console.log("ya sirve flecha 6")
                 clearInterval(intervalo)
             }
        }, 1000 )
    }
    visto = true 
}


FLECHA.addEventListener("click", function () {
    console.log("next")

    if(e==2){
        FLECHA2.style.display = "block"
    }
   
    carruselItems.forEach( (e) => {
        if(e.classList.contains("active")){
            FLECHA.style.display = "none"
           
        }
        
    
    } )
    
})


FLECHA2.addEventListener("click", function(){
    if (visto) {
        FLECHA.style.display= "block"
    }
})
