let button = document.querySelector("div");
let getcharhtml = document.querySelector('#char');

function check() {
    let char = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    let charmin = char.toLowerCase();
    let getcharid = document.getElementById(charmin);

    if (charmin == "mario") {
        getcharhtml.innerHTML = ("Mario");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "luigi") {
        getcharhtml.innerHTML = ("Luigi");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "bowser") {
        getcharhtml.innerHTML = ("Bowser Morton Koopa");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "peach") {
        getcharhtml.innerHTML = ("Princesa Peach Toadstool");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "yoshi") {
        getcharhtml.innerHTML = ("T. Yoshisaur Munchakoopas");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "toad") {
        getcharhtml.innerHTML = ("Toad");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "toadette") {
        getcharhtml.innerHTML = ("Toadette");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "daisy") {
        getcharhtml.innerHTML = ("Princesa Daisy");
        getcharid.setAttribute('title', 'Presentado');
    }
    else {
        getcharhtml.innerHTML = ("(Desconocido)");
    }
    button.setAttribute('style', 'display:none');

}

button.onclick = check;



