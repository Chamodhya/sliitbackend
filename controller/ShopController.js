const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Shop = require('../models/Shop');
const multer = require('multer');

// Set up multer for file upload
const Storage = multer.diskStorage({
    destination: 'upload',
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: Storage
}).single('photo')

const createShop = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
        }
        else{
            const newImage=new Shop({
                title:req.body.title,
                imageUrl:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
            newImage.save().then(()=>res.send('success')).catch()  
        }
    });
}

module.exports = {
    createShop,
};
