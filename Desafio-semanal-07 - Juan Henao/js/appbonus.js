let parrafo = document.querySelector("title");
console.log(parrafo.innerHTML);

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const nombreuno = document.querySelector("#nombreuno").value;
    const apellido = document.querySelector("#apellido").value;
    const apellidouno = document.querySelector("#apellidouno").value;
    const nombredos = document.querySelector("#nombredos").value;
    const nombretres = document.querySelector("#nombretres").value;
    const apellidodos = document.querySelector("#apellidodos").value;
    const apellidotres = document.querySelector("#apellidotres").value;

    if (nombre == nombredos || nombre == nombretres || nombreuno == nombredos || nombreuno == nombretres) {
        console.log("Los nombres son iguales");
        window.alert("Los nombres son iguales");
    }

    if (apellido == apellidotres || apellido == apellidodos || apellidouno == apellidodos || apellidouno == apellidotres) {
        console.log("Los apellidos son iguales");
        window.alert("Los apellidos son iguales");
    }

    console.log(nombre, nombreuno, apellido.toUpperCase(), apellidouno.toUpperCase());
    console.log(nombredos, nombretres, apellidodos.toUpperCase(), apellidotres.toUpperCase());
}