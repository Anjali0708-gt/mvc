const express=require('express');
const router=express.Router();
const controler=require('../controler/product');

// read route file show(get),
router.get('/',controler.getproduct);

// add form(get)
router.get('/add',controler.add);

// add function data show(post methed)
router.post('/add',controler.addproduct);


router.get('/delete/:id', controler.deletee);


module.exports=router;