/*const titulo = ("Prueaba")

console.log(titulo)
document.getElementById("prueba").textContent = titulo;


/*
{
    let nombre =("Pedro")
    console.log(nombre)
}

console.log(nombre)

/*let apellido = ("Perez");
let dni = 39123113;

console.log(nombre,apellido,dni);

let persona  = ["Juan","Perez",39123113];

console.log(persona);

/*



let saludo = ("Hola")
if(true){
    let saludo = ("Hola2")

    console.log (saludo)
}
console.log (saludo)
document.getElementById("mensaje").textContent = saludo;
*/
// Cargar el sonido


const lightsaberSound = new Audio('/script/lightsaber.mp3');

// Seleccionar todos los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-link');

// Agregar un evento de clic a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        lightsaberSound.play(); // Reproducir el sonido
        console.log("click")
    });
}); 
