const mongoose=require('mongoose');
const Schema=mongoose.Schema

const shopSchema=new Schema({
    id:{
        type:String,  
    },
    title: String,
    imageUrl: {
       type:String
    }
})

const Shop=mongoose.model('Shop',shopSchema)
module.exports=Shop