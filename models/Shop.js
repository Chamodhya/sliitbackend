const mongoose = require('mongoose');
const Schema = mongoose.Schema

const shopSchema = new Schema({
    image: {
        public_id: {
            type:String
        },
        url: {
            type:String
        }
    },
    title:{
        type:String
    }
})

const Shop = mongoose.model('Shop', shopSchema)
module.exports = Shop