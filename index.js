

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
//btnRemove.addEventListener("click", () => { removeTodo(todoID) });



//let store = [
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
//]
//let productsContainer = document.querySelector('.products');

//function removeById(productId) {
//    let storeFilter = store.filter(el => Number(el[0]) !== productId)

//   return storeFilter
//}
//console.log(removeById(3));

//const user = {
//  id: 1,
//   name: "John Doe",
//  "email": "john.doe@example.com"
//};

//console.log(user);
//console.log(user.name);
//console.log(user[
//  "email"
//]);

//const newAge = "age";
//user[newAge] = 30;
//user[newAge] = 105;

//console.log(user);

//let name = "John";
//let age = 30;

//const user2 = {
//  name,
//age,
//}
//console.log(user2);
const user = {
    name: "John",
    age: 30
};
user.age = 31; // Update age
user["name"] = "Anna";
console.log(user);

//const clone = Object.assign({}, user);
//let clone = { ...user };
//
const clone = JSON.parse(JSON.stringify(user));
console.log(user);
// structuredClone(user)

for (let key in user) {
    console.log(key, user[key]);
}


const cart = {
    items: [
        { id: 1, title: "Laptop", price: 1200 },
        { id: 2, title: "Phone", price: 800 },
    ],
};
//let newCart = [...cart.items];
//cart.items.shift([0]);
//console.log(cart);

let cartClone = JSON.parse(JSON.stringify(cart));

cartClone.items.shift();
console.log(cart);
console.log(cartClone);


//const users = [
// { name: "Alice", age: 18 },
// { name: "Bob", age: 22 },
// { name: "Charlie", age: 15 },
// { name: "David", age: 30 },
//];

function getAdults(people) {
    let adults = people.filter(person => person.age >= 18);
    return adults;
}
//console.log(getAdults(users));

const carts = [
    { title: "Laptop", price: 1000 },
    { title: "Phone", price: 500 },
    { title: "Headphones", price: 200 },
];


function calculateTotal(carts) {
    let sum = 0;

    carts.forEach(element => {
        sum += element.price
    });

    return sum
}
console.log(calculateTotal(carts));


//const userss = [
//  { id: 1, name: "Alice" },
// { id: 2, name: "Bob" },
// { id: 3, name: "Charlie" },
//];

//function findUserByName(userss, name) {
// let newUser = null;
//userss.forEach(user => {
//  if (user.name.toLowerCase() === name.toLowerCase()) {
//    newUser = user;
//}
// });
//  return newUser;
//}
//console.log(findUserByName(userss, "Alice"));

//const users = [
//   { id: 1, name: "Alice" },
//  { id: 2, name: "Bob" },
//];
//function addUser(users, newUser) {
// clone = JSON.parse(JSON.stringify(users));
// clone.push(newUser);
//    return clone;
//}
//console.log(addUser(users, { id: 3, name: "Charlie" }));
//console.log(users);



let person = document.querySelector('.person');

const students = [
    { name: "Аня", score: 75 },
    { name: "Борис", score: 55 },
    { name: "Вика", score: 90 },
    { name: "Григорий", score: 45 }
];
function getTopStudents(students) {
    let topStudents = students.filter(student => student.score >= 60);
    return topStudents;
}
console.log(getTopStudents(students));
let bestStudents = getTopStudents(students);
bestStudents.forEach(student => {
    person.insertAdjacentHTML('beforeend',
        `<div class="person">${student.name} - ${student.score}</div>`);
});


people = document.querySelector(".players")
const players = [
    { name: "Алексей", points: 150 },
    { name: "Мария", points: 200 },
    { name: "Иван", points: 180 },
    { name: "Светлана", points: 120 },
    { name: "Дмитрий", points: 170 }
];
function getPlayers(players) {
    const bestPlayers = players.sort((a, b) => b.points - a.points);
    return bestPlayers;
}
console.log(getPlayers(players));


getPlayers(players);
let topThree = players.slice(0, 3);

topThree.forEach(player => {
    people.insertAdjacentHTML('beforeend',
        `<div class="player">${player.name} - ${player.points}</div>`);
});


const car
    = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "Blue",
    getCarInfo: function () {
        return `${this.year} ${this.make} ${this.model} in ${this.color}`;
    }
};
console.log(car.getCarInfo());


const user1 = {
    name: "John",
    age: 30,
    email: "john@example.com",
    getUserInfo: function (x) {
        return `${x} ${this.name} is ${this.age} years old and can be contacted at ${this.email}`;
    }
};
console.log(user1.getUserInfo());
const nextUser = {
    name: "Jane",

};

console.log(user1.getUserInfo.call(nextUser, "hello "));//object
console.log(user1.getUserInfo.apply(nextUser, ["hi "]));//obj
console.log(user1.getUserInfo.bind(nextUser));//function
const boundGetUserInfo = user1.getUserInfo.bind(nextUser);
console.log(boundGetUserInfo("Hey "));

//Используем apply
//Условие:
//Создай объект calculator с методом sum(a, b) который возвращает сумму.
//Создай другой объект calc2 с полем factor. Используй apply, чтобы вызвать метод sum объекта calculator для calc2.

const calk = {
    sum(a, b) {
        return a + b;
    }
};

const calc2 = {
    factor: 1
};

console.log(calk.sum.apply(calc2, [5, 10]));
console.log(calk.sum.call(calc2, 20, 30));
console.log(calk.sum.bind(calc2, 1, 2)());


//Задача 5: Практика с массивом объектов и call
//Условие:
//Есть массив объектов пользователей:

const users = [
  { name: "Anna" },
  { name: "Mark" },
  { name: "Tom" }
];

function introduce(greeting) {
    return `${greeting}, ${this.name}!`;
}

users.forEach(user => {
    console.log(introduce.call(user, "Hello"));
});