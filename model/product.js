// in-memmory
products=[];

// display product 
function get()
{
    return products;
};

// add user
function add(product)
{
    products.push(product);
    console.log("product added",product);
};
 function remove(id){
    products= products.filter((u)=> u.id !==id)
 };
module.exports = { get, add, remove };