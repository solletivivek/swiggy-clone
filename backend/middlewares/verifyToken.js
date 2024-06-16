const jwt = require('jsonwebtoken');
const dotenv= require('dotenv');
const Vendor = require('../models/vendor');

dotenv.config();

const secretKey = process.env.whatIsThis;


const verifyToken = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ status: 'failed', message: 'Access denied' });
    }
    try{
        const decoded=jwt.verify(token,process.env.whatIsThis);
        const vendor=await(Vendor.findById(decoded.vendorId));

        if(!vendor){
            return res.status(404).json({status:'failed',message:'Access denied'});
        }
        req.vendorId=vendor._id;
        next();
    }catch(error){
        console.log(error);
       return res.status(500).json({status:'failed',message:'Server error'});
    }
}

module.exports= verifyToken;
