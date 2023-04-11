const express=require('express')
const router=express.Router()

const ShopController=require('../controller/ShopController')

router.post('/create',ShopController.createShop)
router.get('/create',ShopController.getShop)
 
module.exports=router