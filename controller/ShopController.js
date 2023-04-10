const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Shop = require('../models/Shop')
const multer = require('multer');
const upload=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Images')
    }
})

const createShop = (req, res, next) => {
    console.log(req.body)
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const document = new Shop({
        title: req.body.title,
        imageUrl: { 
            data:req.file.filename,
            contentType:'image/png'
        }
    });
    document.save() 
        .then(() => {
            res.json({ id: document._id });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error });
        });
}

module.exports = {
    createShop
}
