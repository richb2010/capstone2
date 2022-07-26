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

