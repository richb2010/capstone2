const express = require("express");
const cors = require("cors");
const { getTetonSoccer, getTetonSoccer } = require('./controller')

const app = express();

app.use(express.json());


const {
    getProduct,
    deleteProduct,
    createList,
    updateCart,

} = require('./controller')

app.get(`/api/TetonSoccer`, getProduct, getProduct2,getProduct3, getProduct4)
app.delete(`/api/TetonSoccer`, getProduct, getProduct2,getProduct3, getProduct4)
app.post(`/api/cart`, createList)
app.put(`TetonSoccer`, updateCart)

app.listen(5500, ()=> console.log(`running on 5500 `))


