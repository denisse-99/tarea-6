//DOM API
//OBTENER EL POR ID
//
const div1 = document.getElementById("div-1");
console.log(div1); 

const divCollection = document.getElementsByTagName("div");
console.log(divCollection); 

const p = document.getElementById("p1");
const usernameInputs = document.getElementsByName("username"); //obtiene múltiples elementos por su nombre.
const usernameInput = usernameInputs[0];

console.log(p, usernameInput); //en caso de tener más elementos con el mismo nombre, yo solo quiero al que tiene el índice 0.

//Events -> Es cualquier interacción por parte del usuario.
usernameInput.addEventListener("input", (event) => { console.log(event.target.value);
p.innerText = event.target.value;
}); //value son los datos que tiene el input?
