

let items = [];

let input = document.querySelector('.input');
let btn = document.querySelector(".button");
let itemsContainer = document.querySelector('.items');
let btnRemove = document.querySelector(".remove");


btn.addEventListener("click", () => {
    // console.log("Click", input.value);
    let value = input.value.trim();
    items.push(value);

    const todoID = Math.floor(Math.random() * 10000000000000);

    itemsContainer.insertAdjacentHTML('beforeend',
        `<div class="items" data-id="${todoID}">${value}
        <button class="remove" onclick="removeTodo(${todoID})">Remove</button>
        </div>`);
    input.value = "";
    console.log(items);
})
function removeTodo(todoID) {
    document.querySelector(`.items[data-id="${todoID}"]`).remove();
}
btnRemove.addEventListener("click", () => { removeTodo(todoID) });


let store = [
    [
        "1",
        "SteelSeries New Apex 9 Mini",
        "91.70",
        "https://m.media-amazon.com/images/I/710tFiQvqaL._AC_UY218_.jpg",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, minus!"
    ],
    [
        "2",
        "ASUS ROG Azoth 75%",
        "247",
        "https://m.media-amazon.com/images/I/61E5W37UANL._AC_UY218_.jpg",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, minus!"
    ],
    [
        "3",
        "Razer Ornata V3",
        "37.99",
        "https://m.media-amazon.com/images/I/71pqfvJKW5L._AC_UY218_.jpg",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, minus!"
    ]
]
let productsContainer = document.querySelector('.products');