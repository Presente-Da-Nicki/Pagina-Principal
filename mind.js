var valor = 0
var final = document.getElementById("final")
var zombie = document.getElementById("historia")

function tema(){
    valor = 1
    verificar()
    document.body.classList.toggle("dark")
}

function historia(){
    valor = 2
    verificar()
    window.open("https://presente-da-nicki.github.io/Historinha-cap1/")
}

function finalizar(){
    window.open("")
    window.close()
}

function verificar(){
    if(valor === 1){
        zombie.disabled = false
    }
    if(valor === 2){
        final.disabled = false
    }
}

