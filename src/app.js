console.log("hola")
const express = require('express');
const app = express();
const ProductManager = require('./ProductManager')
const productManager = new ProductManager()

app.use(express.urlencoded({extended : true}));

app.get('/productos', async (req, res) => {
    const {limite} = req.query
    const products= await productManager.getProduct()
   if(limite == 0){
       return res.send(products)
   }else {
    const prodLimit = products.slice(0 , limite)
    return res.send(prodLimit)
   }
})

app.get('/productos/:pid', async (req, res) => {
    const products= await productManager.getProduct()
    const { pid } = req.params
  
    for (const p of products) {
      if (p.id == pid) {
        res.send(p)
        return
      }
    }
      


    res.send('no encontrado')
  })


app.listen(8080,()=>console.log("El servidor está escuhando en el puerto 8080"))