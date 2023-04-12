const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Shop = require('../models/Shop');
const multer = require('multer');
const cloudinaryUpload = require('../utils/Cloudinary');

// Set up multer for file upload
const createShop = async (req, res, next) => {
    const { image } = req.files;
    const {title}=req.body;

    // Set up options for Cloudinary upload
    const opts = {
        overwrite: true,
        invalidate: true,
        resource_type: 'auto', 
    };

    try {
        // Upload the image to Cloudinary
        const result = await cloudinaryUpload.uploader.upload(image.tempFilePath, {
            folder: 'shops',
            width: 300,
            resource_type: 'auto',
        });

        // Create a new shop with the image URL returned from Cloudinary
        const shop = await Shop.create({
            image: {
                public_id: result.public_id,
                url: result.secure_url,
            },
            title,
        });

        // Send a success response
        res.status(201).json({ success: true });
    } catch (err) {
        // Handle any errors that occur during the process
        console.log(err);
        res.status(500).json({ success: false, message: 'Error creating shop' });
    }
};

const findAllShops = (req, res, next) => {
    Shop.find().then(station => {
        if (station) {
            res.json({
                massage: station
            })
        }
    }
    )
}

const getShop = async (req, res, next) => {
    const delid = req.params.id;
    console.log(delid);
    try {
        const result = await Shop.findOne({_id: delid });
        if (!result) {
            return res.status(404).send("Fuel station not found");
        }
        return res.status(200).send(result);
    } catch (err) {
        // Handle errors here
    }
}

module.exports = {
    createShop,findAllShops,getShop
};
