const mongoose=require('mongoose');
const Schema=mongoose.Schema

const shopSchema=new Schema({
    id:{
        type:String,  
    },
    title: String,
    imageUrl: {
        data:Buffer,
        contentType:String
    }
})

const Shop=mongoose.model('Shop',shopSchema)
module.exports=Shop