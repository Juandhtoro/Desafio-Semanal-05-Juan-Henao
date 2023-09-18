let cat = "🐈    ";
let cat_1 = "🐈🐈    ";
let step = "👣";
let cantidad = prompt("Ingresar cantidad de gatos");
let cantidad_1 = prompt("Ingresar cantidad de pasos");

for (let i = 1; i <= cantidad_1; i++) {
    cat += step;
    cat_1 += step;
}

for (let j = 1; j <= cantidad; j++) {
    if (j % 2 == 0) {
        console.log("Gato #" + (j) + "   " + cat_1);
    } else {
        console.log("Gato #" + (j) + "   " + cat);
    }
}
