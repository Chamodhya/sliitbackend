const express=require('express')
const router=express.Router()


const ShopController=require('../controller/ShopController')

router.post('/create',ShopController.createShop)
router.get('/find',ShopController.findAllShops)
router.get('/findOne/:id',ShopController.getShop)


 
module.exports=router