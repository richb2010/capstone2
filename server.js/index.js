const express = require("express");
const cors = require("cors");
const { getStore, getCart } = require('./controller')

const app = express();
app.use(cors());

app.use(express.json());


app.get("/api/store", getStore);
app.get("/api/cart", getCart)

app.listen(4000, () => console.log("Server running on 4000"));

app.use(express.json());

const { getCart } = require('./controller')

app.get("/api/cart", getCart);

app.listen(5500, () => console.log("Server running on 5500"));

let items_array = [
    { "name": "Soccer Cheats", "id": 1, count: 1 },
    { "name": "Soccer Jersey", "id": 2, count: 1 },
    { "name": "Soccer Ball", "id": 3, count: 1 },
    { "name": "Soccer Shorts", "id": 4, count: 1 },
    {  "name": "Goalie Grooves", "id": 5, count: 1 }
];

let cart = [];
function appendNode(parent, element) {
    parent.appendChild(element);
};

function getDiv(container) {
    return document.getElementById(container);
};

function createNode(node) {
    let element = document.createElement(node);
    return element;
};
function appendNode(parent, element) {
    parent.appendChild(element);
};

function getDiv(container) {
    return document.getElementById(container);
};

function createNode(node) {
    let element = document.createElement(node);
    return element;
};
function displayItems(items, container) {
    let items_container = getDiv(container);
    items_container.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        let item_node = createNode("li");
        item_node.setAttribute("id", item.id);

        if (item.count > 0) {
            item_node.innerHTML = `${item.name} 
            <span id="badge">${item.count}</span>`;
            appendNode(items_container, item_node);
        }
    }
}
function addOrRemoveItemsFromCart(action) {
    // code in the previous block is still there

    function takeAction(container) {
        container.addEventListener("click", function (event) {
            let item_id = event.target.id;

            if (item_id !== "items" && item_id !== "badge") {
                let item = items_array.filter(function (item) {
                    return item.id == item_id;
                })[0];

                let item_in_cart = cart.filter(function (item) {
                    return item.id == item_id;
                })[0];

                if (item_in_cart == undefined) {
                    cart.push(item);
                } else if (action == "add") {
                    item_in_cart.count++;
                } else if (action == "remove") {
                    item_in_cart.count--;
                }

                console.log(cart);
                displayItems(cart, "cart");
            };
        });
    };
}
addOrRemoveItemsFromCart('add');
addOrRemoveItemsFromCart('remove');
