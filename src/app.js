console.log("hola")
const express = require('express');
const app = express();
const ProductManager = require('./ProductManager')
const productManager = new ProductManager()

app.use(express.urlencoded({extended : true}));

app.get('/productos', async (req, res) => {
    const {search, limit} = req.query
    console.log(`Buscando productos con ${search}`)
    const products= await productManager.getProduct()

    let filtrados= products
    if(search){
        filtrados=filtrados.filter(p => p.keywords.includes(search.toLowerCase())||p.title.toLowerCase().includes(search.toLowerCase()))
    }
    res.send(filtrados)



})

app.listen(8080,()=>console.log("El servidor está escuhando en el puerto 8080"))