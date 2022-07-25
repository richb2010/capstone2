const houses = require(`./db.json`)
let globalId = 4 

module.exports = {
    getCart: (req, res) => res.status(200).send(cart),
    deleteProduct: (req,res) => {
        let index= product.findIndex(elem => elem.id === +req.params.id)
        product.splice(index, 1)
        res.status(200).send(cart)
    },
    createCart: (req,res) => {
        let {product, price, imageURL } = req.body
        let newItem = {
            id: product,
            PRODUCT DESCRIPTION,
            price,
            imageURL
        }
        Store.push(newProduct)
        res.status(200).send(cart)
        globalId++
    },
    updatCart: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = product.findIndex(elm => elem.id === +id)

        if (product[index].price <= 100 && type === 'minus') {
            product[index].price = 0 
            res.status(200).send(cart)
        } else if (type === 'plus') {
            product[index].price += 100
            res.status(200).send(cart)
        } else if (type === 'minus') {
            product[index].price -= 100
            res.status(200).send(cart)
        }else {
            res.sendStatus(400)
        }
    }
}