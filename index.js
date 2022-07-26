const { getCart } = require("../server/controller");

const cartBtn = document.getElementById("cartButton")

const getProduct = () => {
    axios.get("http://localhost:4000/api/complimaent/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

cartBtn.addEventListener('click',getProduct)
const CartBtn = document.getElementById("cartButton")
const productInput = document.getElementById("complimentInput")
const addCartButton = document.getElementById("addCartButton")

const getCart = () => {
    axios.get("http://localhost:4000/api/cart/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const addProduct = () => {
    const productInput = document.getElementById('complimentInput')
    const body ={
        Product: ProductInput.value
    }
    axios.post(`http://localhost:4000/api/compliment`, body)
    .then(() => alert('Product has been added'))
    .catch ((err) => console.log(err) )
}

CartBtn.addEventListener('click', getAlertData)
addcarttBtn.addEventListener('click', addCompliment)