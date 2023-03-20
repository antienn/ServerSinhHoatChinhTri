const usersModels = require("../models/user");
const cloudinary = require("../configs/cloudinary")

const Managercmt = {
    addcmt : async(req,res)=>{
        try{
            const {urlimage} = req.body.data;
            const {content,date,name} = req.body.data;
            const uploadResponse = await cloudinary.uploader.upload(urlimage, {folder: 'cmt'});
            const cmttemp ={
                "name":name,
                "date":date,
                "content": content,
                "urlimage" : uploadResponse.url
            }
            const cmt = await usersModels.create(cmttemp);
            return res.status(200).json(cmt)    
        }catch(err){
            return res.status(500).json(err);
        }
    },
    getalldata: async (req,res)=>{
        try{
            const data = await userModels.find({},{ _id: 0 })
            return res.status(200).json({
                "listdata":data,
            })
        }catch(err){
            return res.status(500).json(err);
        }
    }
    
}

module.exports = Managercmt;