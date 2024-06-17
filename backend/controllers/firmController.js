
const Vendor = require('../models/vendor');
const Firm = require('../models/firm');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + path.extname( file.originalname));
    }
});

const upload=multer({storage:storage});

const addFirm= async(req,res)=>{
    try{
    const {firmName,area,category,region,offer}=req.body;
    
    const image = req.file? req.file.filename:undefined;
    
    
    const vendor = await Vendor.findById(req.vendorId);

    if(!vendor){
        return res.status(404).json({status:'failed',message:'Vendor not found'});
    }

    const firm= new Firm({
        firmName,
        area,
        category,
        region,
        offer,
        image,
        vendor:req.vendorId
    });
    const savedFirm=await firm.save();
    vendor.firm.push(savedFirm);
    await vendor.save();
    return res.status(201).json({status:'success',message:'Firm added successfully'});
    }catch(error){
        console.log(error);
        return res.status(500).json({status:'failed',message:'Server error'});
    }
}

module.exports={addFirm:[upload.single('image'),addFirm]}