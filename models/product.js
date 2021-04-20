//const products = [];
const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename),'data', 'products.json');

const getDataFromFile = (callback) =>{
    //const p = path.join(path.dirname(require.main.filename),'data', 'products.json');
    fs.readFile(p, (err, fileContent)=>{
        if(err){
            callback([]);
        }
        else{
            callback(JSON.parse(fileContent));
        }                
    });
}; 


module.exports = class Product{
    constructor(title, imageURL, description, price){
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageURL = imageURL;
    }

    save(){
        getDataFromFile(products =>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
            console.log(err);
            });
        });
    }

    static fetchAll(callback){
        getDataFromFile(callback);
    }
};