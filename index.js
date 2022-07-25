const storeBtn = document.getElementById("store")

const getStore= () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getStore = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getStore2 = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getStore3 = () => {
    axios.get("http://127.0.0.1:5500/client/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getStore)
AdviceBtn.addEventListener('click', getStore)
AdviceBtn.addEventListener('click', getStore)
AdviceBtn.addEventListener('click', getStore)

