const Vendor = require('../models/Vendor');
const jwt = ('jsonwebtoken');
const bcrypt = require('bcryptjs');


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
            res.status(200).json({status:'success',message:'Login successful'});
            console.log(email);
        }catch(error){

        }
    
}



module.exports={vendorRegister,vendorLogin}