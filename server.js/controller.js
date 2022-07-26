const cart = [
    "Soccer Jersey", "Soccer ball","Goalie Groves", "Soccer Shorts"
]

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
module.exports = {
    getCart: (req, res) => {
        let randomIndex = getRandomIndex(product);
        const randomFortunes = product[randomIndex];

        res.status(200).send(randomProduct);
    },
    

    getProduct: (req, res) => {
        const product = ["Your items has been added to your cart")
        // choose Product from home 
        let randomIndex  = getRandomIndex(product);
        let  = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }
    addCompliment: (req, res) => {
        const { compliments } = req.body;
        compliments.push(compliment):
        res.senStatus(200); 
    }

}

