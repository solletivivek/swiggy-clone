const Vendor = require('../models/Vendor');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const secretKey = process.env.whatIsThis;


//Vendor registration
const vendorRegister=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        const vendorEmail=await Vendor.findOne({email});
            if(vendorEmail){
                return res.status(400).json({status:'failed',message:'Email already exists'});
            }
            const hashedPasword=await bcrypt.hash(password,10);
            const newVendor=new Vendor({username,email,password:hashedPasword});
            await newVendor.save();

            res.status(201).json({message:"Vendor registered successfully"});
            console.log('Vendor registered successfully');
        }catch(error){
            console.log(error);
            res.status(500).json({status:'failed',message:'Server error'});
        }
}



const vendorLogin=async(req,res)=>{
    const{email,password}=req.body;
        try{
            const vendor=await Vendor.findOne({email});
            if(!vendor || !(await bcrypt.compare(password,vendor.password))){
                return res.status(401).json({status:'failed',message:'Invalid username or password'});
            }
            const token = jwt.sign({vendorId: vendor._id},secretKey,{expiresIn:'1h'});

            res.status(200).json({status:'success',message:'Login successful',token});
            console.log(email,"token-->",token);
        }catch(error){

        }
    
}

const getAllVendors=async(req,res)=>{
    try{
        const vendors=await Vendor.find().populate('firm');
        res.status(200).json({status:'success',vendors});
    }catch(error){
        console.log(error);
        res.status(500).json({status:'failed',message:'Server error'});
    }

}

const getVendorById=async(req,res)=>{
    const vendorId=req.params.id;
    try{
        const vendor=await Vendor.findById(vendorId).populate('firm');
        if(!vendor){
            return res.status(404).json({status:'failed',message:'Vendor not found'});
        }
        res.status(200).json({status:'success',vendor});
    }catch(error){
        console.log(error);
        res.status(500).json({status:'failed',message:'Server error'});
    }
}

module.exports={vendorRegister,vendorLogin,getAllVendors,getVendorById}