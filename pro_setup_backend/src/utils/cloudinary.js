import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

// Upload an image
const uploadOnCloudinery = async (localFilePath) =>{
    try {
        if (!localFilePath)  return null 
       const response =  await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        //file has been uploded successfull 

        console.log("file is uploded on cloudinary", response.url)
        return response
     
    } catch (error) {
        fs.unlinkSync(localFilePath)/// remove the localy file  saved temperary file as the upload operatating got failed
        return null;
        
    }
}

export {uploadOnCloudinery}