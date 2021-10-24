let valorTicket = 200;
let alertEl = document.getElementById("alert-el")


function resumen() {
    let cantidadEl = Math.ceil(document.getElementById("inputcantidad").value)
    let categoriaEl = document.getElementById("categoria-el").value
    document.getElementById("inputcantidad").value = cantidadEl 

    if (cantidadEl < 0) {
        cantidadEl = 1
        document.getElementById("inputcantidad").value = cantidadEl 
    }

    if (categoriaEl == "estudiante") {
        let totalAPagar = valorTicket * cantidadEl
        totalAPagar = totalAPagar * 0.20
        alertEl.innerText = "Total a Pagar: $"
        alertEl.innerText = alertEl.innerText + " " + totalAPagar
    } else if (categoriaEl == "trainee") {
        let totalAPagar = valorTicket * cantidadEl
        totalAPagar = totalAPagar * 0.50
        alertEl.innerText = "Total a Pagar: $"
        alertEl.innerText = alertEl.innerText + " " + totalAPagar
    } else if (categoriaEl == "junior") {
        let totalAPagar = valorTicket * cantidadEl
        totalAPagar = totalAPagar * 0.85
        alertEl.innerText = "Total a Pagar: $"
        alertEl.innerText = alertEl.innerText + " " + totalAPagar
    } else {
        let totalAPagar = valorTicket * cantidadEl
        alertEl.innerText = "Total a Pagar: $"
        alertEl.innerText = alertEl.innerText + " " + totalAPagar
    }
}

function borrar() {
    let cantidadEl = Math.ceil(document.getElementById("inputcantidad").value)
    let categoriaEl = document.getElementById("categoria-el").value
    document.getElementById("inputcantidad").value = 1
    alertEl.innerText = "Total a Pagar: $"
}