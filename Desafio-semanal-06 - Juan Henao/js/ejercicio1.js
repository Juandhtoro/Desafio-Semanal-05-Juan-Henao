let cat = "😺    ";
let cat1 = "😸    ";
let cat2 = "😹    ";
let j = 1;
let k = 1;
let cantidad = prompt("Ingresar cantidad de gatos");

console.log("Gato #1" + " " + cat);

for (let i = 1; i <= cantidad; i++) {
    if (i % 3 == 0) {
        j = i + 1;
        console.log("Gato #" + (i) + "   " + cat2);
    } else if (j < i) {
        k = j + 1;
        console.log("Gato #" + (i) + "   " + cat1);
    } else if (k < i) {
        console.log("Gato #" + (i) + "   " + cat);
    }
}






