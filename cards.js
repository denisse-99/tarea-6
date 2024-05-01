/*
*[x]Crear tarjeta
*[x]Crear secciones para tarjeta.
*[x]Imagen
*[x]Nombre, descripción, edad, lista.
*[x]Inyectar información en la tarjeta.
*[x]Mostrar dentro de div.container
*[x]Crear funciones reutilizables.
*[x]Funciones para crear items
*[x]Funciones para inyectar texto
*[x]Funciones para renderizar
*[x]Múltiplos de usuarios
*/

const CARDS_CONTAINER = document.querySelector("#card-container"); //Siempre debe estar.
const USERS = [
    {
    id: 1,
    username: "carolina17",
    desc: "Amante de los libros de romance. ",
    age: 15,
    fav_books: {
        books: [
        "3MSC",
        "Estrellas Fugaces",
        "Bajo la misma estrella"
        ],
    },
},
    {
    id: 2,
    username: "jonathan_123",
    desc: "Fan de leer en las tardes lluviosas. ",
    age: 20,
    fav_books: {
        books: [
        "El Conde de Montecristo",
        "El Señor de las Moscas",
        "Crimen y castigo"
        ],
    },
},
];

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

//Crear tarjeta e inyectamos información.
function injectData(obj, user) {
    const bookList = user.fav_books.books.map ((e) =>
{
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
});

    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age;
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
    card.className = "div-creado";
    CARDS_CONTAINER.appendChild(card);
}

USERS.forEach((user) => {
    const cardData = createElements();
    injectData(cardData, user);
    });

