var valor = 0
var final = document.getElementById("final")
var zombie = document.getElementById("historia")

function tema(){
    document.body.classList.toggle("dark")
}

function historia(){
    valor = 1
    window.open("https://presente-da-nicki.github.io/Historinha-cap1/")
}

function finalizar(){
    window.open("")
    window.close()
}

function verificar(){
    if(valor === 1){
        final.disabled = false
    }
}

