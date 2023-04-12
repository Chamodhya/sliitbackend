const express=require('express')
const router=express.Router()


const ItemController=require('../controller/ItemController')

router.post('/create',ItemController.createItem)
router.post('/shopWise',ItemController.findItemShopWise)
module.exports=router