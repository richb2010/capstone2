const cartBtn = document.getElementById("Cartbutton")

const getCart = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getCart2 = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getCart3 = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getCart4 = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
carttBtn.addEventListener('click', getCart)
cartBtn.addEventListener('click', getCart
cartBtn.addEventListener('click', getCart)
cartBtn.addEventListener('click', getCart)


