import { v2 as cloudinary } from cloudinary;
import fs from fs;

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//upload files from local server to cloudinary
const uploadOnCloudinary = async (localFilepath) => {
    try {
        if(!localFilepath) return null;
        const response = cloudinary.uploader.upload(localFilepath,{resource_type: "auto"});
        console.log("File is uploaded on cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlikSync(localFilepath)//remove the locally saved temorary file as the upload operation got faild
    }
}

export {uploadOnCloudinary}