/*
*[]Crear tarjeta
*[]Crear secciones para tarjeta.
*[]Imagen
*[]Nombre, descripción, edad, lista.
*[]Inyectar información en la tarjeta.
*[]Mostrar dentro de div.container
*Crear funciones reutilizables.
*Funciones para crear items
*Funciones para inyectar texto
*Funciones para renderizar
*Múltiplos de usuarios
*/

const CARDS_CONTAINER = document.querySelector("#card-container"); //Siempre debe estar.
const USER = {
    id: 1,
    username: "User Name",
    desc: "Sobre mí",
    age: 24,
    fav_books: {
        books: [
        "3MSC",
        "El Principito",
        "Ángeles y Demonios",
    ],
    },
}; 

//Crea un array en js con dos users con los siguientes atributos: Id(num), username, --> Esto lo podemos poner en CHATGPT. 

//Los objetos se declaran con llaves como si fuera un valor?


//Crear secciones
function createElements() {
const cardObj = {
    name_section: document.createElement("h3"),
    desc_section: document.createElement("p"),
    age_section: document.createElement("p"),
    book_section: document.createElement("div")
};
return cardObj;
}

// Lista ----------------------------------------------
const bookList = USER.fav_books.books.map((e) => { ///*map es iteracción por cada elemento del array y regresa el array de lo que le indiquemos.  A diferencia del for each que repite*/
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
})
console.log(bookList);



//Crear tarjeta
//Inyectamos información
function injectData(obj) {

    
    obj.name_section.textContent = USER.username;
    obj.desc_section.textContent = USER.desc;
    obj.age_section.textContent = USER.age;
    obj.book_section.append(...bookList);
    renderCard(obj);
}

function renderCard(cardObj) {
    const card = document.createElement("div");
    card.append(
        cardObj.name_section,
        cardObj.desc_section,
        cardObj.age_section,
        cardObj.book_section,
    );
CARDS_CONTAINER.appendChild(card);
}

const cardData = createElements();
injectData(cardData);

