const fs= require('fs/promises');
const path= require('path');
//import {fileURLToPath} from 'url';
//const __filename= fileURLToPath(import.meta.url);

class ProductManager{
    constructor(filename){
        this.filename = filename;
        this.filepath = path.join(__dirname, 'productos.json');
        this.products= []
        console.log(this.filepath);
    }
    async getProduct(){
        const data = await fs.readFile(this.filepath, 'utf8');
        this.products = JSON.parse(data)
        return this.products
    }
}
module.exports = ProductManager
