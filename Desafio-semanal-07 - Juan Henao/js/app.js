// Entrega 07

let parrafo = document.querySelector("title");
console.log(parrafo.innerHTML);

function comparar() {
    let participante = ""
    let contador = 0;
    for (let j = contador; j <= 3; j++) {

        if (datos[j].innerHTML != "" && j <= 1) {
            participante += datos[j].innerHTML + " ";
        } else if (datos[j].innerHTML != "" && j <= 3) {
            participante += datos[j].innerHTML.toUpperCase() + " ";
        }
    }
    console.log("Integrante 1: " + participante);

    let participante1 = ""
    let contador1 = 4;
    for (let k = contador1; k <= 7; k++) {
        if (datos[k].innerHTML != "" && k <= 5) {
            participante1 += datos[k].innerHTML + " ";
        } else if (datos[k].innerHTML != "" && k <= 7) {
            participante1 += datos[k].innerHTML.toUpperCase() + " ";
        }
    }
    console.log("Integrante 2: " + participante1);
}

function buscarCoincidencias(datosDelIntegrante1, datosDelIntegrante2) {
    for (let i = 0; i < datosDelIntegrante1.length; i++) {

        if (i === 0 || i === 1 || i === 2 || i === 3) {
            for (let j = 0; j < datosDelIntegrante2.length; j++) {

                if (j === 0 || j === 1) {
                    if (datosDelIntegrante1[i].innerHTML === datosDelIntegrante2[j].innerHTML) {
                        let color = prompt("Los nombres son iguales, por favor ingrese un color para detectarlos:");
                        datosDelIntegrante1[i].style.color = color;
                        datosDelIntegrante2[j].style.color = color;
                        console.log("Hubo coincidencias en los nombres, se diferenciarán por el color: " + color);
                    }
                }

                if (j === 2 || j === 3) {
                    if (datosDelIntegrante1[i].innerHTML === datosDelIntegrante2[j].innerHTML) {
                        let color = prompt("Los apellidos son iguales, por favor ingrese un color para detectarlos:");
                        datosDelIntegrante1[i].style.color = color;
                        datosDelIntegrante2[j].style.color = color;
                        console.log("Hubo coincidencias en los apellidos, se diferenciarán por el color: " + color);
                    }
                }
            }
        }
    }

}

const datos = document.querySelectorAll("dd");
const datosDelIntegrante1 = [datos[0], datos[1], datos[2], datos[3]];
const datosDelIntegrante2 = [datos[4], datos[5], datos[6], datos[7]];

function ejecutar() {
    comparar();
    buscarCoincidencias(datosDelIntegrante1, datosDelIntegrante2);
}

// Bonus

function validarFormulario() {
    let nombre = document.querySelector("#nombre").value;
    let nombreuno = document.querySelector("#nombreuno").value;
    const apellido = document.querySelector("#apellido").value;
    const apellidouno = document.querySelector("#apellidouno").value;
    const nombredos = document.querySelector("#nombredos").value;
    const nombretres = document.querySelector("#nombretres").value;
    const apellidodos = document.querySelector("#apellidodos").value;
    const apellidotres = document.querySelector("#apellidotres").value;
    console.log(nombre, nombreuno, apellido.toUpperCase(), apellidouno.toUpperCase());
    console.log(nombredos, nombretres, apellidodos.toUpperCase(), apellidotres.toUpperCase());

    if (nombre == nombredos || nombre == nombretres || nombreuno == nombredos || nombreuno == nombretres) {
        console.log("Los nombres son iguales");
        window.alert("Los nombres son iguales");
    }

    if (apellido == apellidotres || apellido == apellidodos || apellidouno == apellidodos || apellidouno == apellidotres) {
        console.log("Los apellidos son iguales");
        window.alert("Los apellidos son iguales");
    }
}

function compararbonus() {
    validarFormulario();
}