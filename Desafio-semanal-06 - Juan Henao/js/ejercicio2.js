let cat = "🐈    ";
let step = "👣";
let cantidad = prompt("Ingresar cantidad de gatos");
let cantidad_1 = prompt("Ingresar cantidad de pasos");

for (let i = 1; i <= cantidad_1; i++) {
    cat += "👣";
}

for (let j = 1; j <= cantidad; j++) {
    console.log("Gato #" + (j) + "   " + cat);
}