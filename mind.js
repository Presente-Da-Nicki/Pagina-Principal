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
    window.open("/Historinha/cap-1/Index.html")
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

