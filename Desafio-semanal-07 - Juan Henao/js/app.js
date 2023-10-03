let parrafo = document.querySelector("title");
console.log(parrafo.innerHTML);

let parrafo1 = document.querySelectorAll("dd");

function comparar() {
    let participante = ""
    let contador = 0;
    for (let j = contador; j <= 3; j++) {

        if (parrafo1[j].innerHTML != "" && j <= 1) {
            participante += parrafo1[j].innerHTML + " ";
        } else if (parrafo1[j].innerHTML != "" && j <= 3) {
            participante += parrafo1[j].innerHTML.toUpperCase() + " ";
        }
    }
    console.log("Integrante 1: " + participante);


    let participante1 = ""
    let contador1 = 4;
    for (let k = contador1; k <= 7; k++) {
        if (parrafo1[k].innerHTML != "" && k <= 5) {
            participante1 += parrafo1[k].innerHTML + " ";
        } else if (parrafo1[k].innerHTML != "" && k <= 7) {
            participante1 += parrafo1[k].innerHTML.toUpperCase() + " ";
        }
    }
    console.log("Integrante 2: " + participante1);

    if (parrafo1[0].innerHTML == parrafo1[4].innerHTML) {
        let color = prompt("Los nombres son iguales, por favor ingrese un color:");
        let elementoConClase = document.querySelector("#primernombre");
        let elementoConClase1 = document.querySelector("#segundonombre");
        console.log("Los nombres son guales");
        elementoConClase.style.color = color;
        elementoConClase1.style.color = color;
    } else if (parrafo1[0].innerHTML == parrafo1[5].innerHTML) {
        let color = prompt("Los nombres son iguales, por favor ingrese un color:");
        let elementoConClase1 = document.querySelector("#primernombre");
        let elementoConClase = document.querySelector("#segundonombre1");
        console.log("Los nombres son iguales");
        elementoConClase.style.color = color;
        elementoConClase1.style.color = color;
    } else if (parrafo1[1].innerHTML == parrafo1[4].innerHTML) {
        let color = prompt("Los nombres son iguales, por favor ingrese un color:");
        let elementoConClase1 = document.querySelector("#primernombre1");
        let elementoConClase = document.querySelector("#segundonombre");
        console.log("Los nombres son iguales");
        elementoConClase.style.color = color;
        elementoConClase1.style.color = color;
    } else if (parrafo1[1].innerHTML == parrafo1[5].innerHTML) {
        let color = prompt("Los nombres son iguales, por favor ingrese un color:");
        let elementoConClase1 = document.querySelector("#primernombre1");
        let elementoConClase = document.querySelector("#segundonombre1");
        console.log("Los nombres son iguales");
        elementoConClase.style.color = color;
        elementoConClase1.style.color = color;
    } else {
        console.log("No hay coincidencias en los nombres");
    }

    if (window.confirm("¿Desea comparar los apellidos")) {
        if (parrafo1[2].innerHTML == parrafo1[6].innerHTML) {
            let colorapellido = prompt("Los apellidos son iguales, por favor ingrese un color:");
            let apellido = document.querySelector("#primerapellido");
            let apellido1 = document.querySelector("#segundoapellido");
            console.log("Los apellidos son iguales");
            apellido.style.color = colorapellido;
            apellido1.style.color = colorapellido;
        } else if (parrafo1[2].innerHTML == parrafo1[7].innerHTML) {
            let colorapellido = prompt("Los apellidos son iguales, por favor ingrese un color:");
            let apellido1 = document.querySelector("#primerapellido");
            let apellido = document.querySelector("#segundoapellido1");
            console.log("Los apellidos son iguales");
            apellido.style.color = colorapellido;
            apellido1.style.color = colorapellido;
        } else if (parrafo1[3].innerHTML == parrafo1[6].innerHTML) {
            let colorapellido = prompt("Los apellidos son iguales, por favor ingrese un color:");
            let apellido1 = document.querySelector("#primerapellido1");
            let apellido = document.querySelector("#segundoapellido");
            console.log("Los apellidos son iguales");
            apellido.style.color = colorapellido;
            apellido1.style.color = colorapellido;
        } else if (parrafo1[3].innerHTML == parrafo1[7].innerHTML) {
            let colorapellido = prompt("Los apellidos son iguales, por favor ingrese un color:");
            let apellido1 = document.querySelector("#primerapellido1");
            let apellido = document.querySelector("#segundoapellido1");
            console.log("Los apellidos son igualess");
            apellido.style.color = colorapellido;
            apellido1.style.color = colorapellido;
        } else {
            console.log("No hay coincidencias en los apellidos");
        }
    }
}

comparar();
