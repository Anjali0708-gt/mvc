const products=require('../model/product');
const { v4: uuidv4 } = require("uuid"); // To generate unique IDs

// For listing products
function getproduct(req, res) {
    console.log("/ route hit");
    res.render("allproduct", { product: products.get() });
}


// for add  product first display a add form then add the data in a object /contant through req.body,data pass to model in add method /function then redirect the page to display all product
function add(req,res)
{
 res.render("addform");
};
// function addproduct(req,res){
//     const { name, price } = req.body;
//     // now all the data that is send to a form in store in name ,price object ,now in model(products import) pass the name ans price (object)to add method 
//   products.add({ name, price });
//   console.log(req.body);
//     res.redirect("/");

// };
function addproduct(req, res) {
    const { name, price } = req.body;
    const product = { id: uuidv4(), name, price }; // assign unique ID
    products.add(product);
    res.redirect("/");
}

function deletee(req,res)
{
    //model (logic) function call in this or pass the id 
    
     products.remove(req.params.id);
     res.redirect("/");
}
    

exports.getproduct=getproduct;
exports.add=add;
exports.addproduct=addproduct;
exports.deletee=deletee;