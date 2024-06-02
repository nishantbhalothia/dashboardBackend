const cloudinary = require('cloudinary').v2;
const fs = require("fs");
          
cloudinary.config({ 
  cloud_name: 'dc95gwvhu', 
  api_key: '358233861913424', 
  api_secret: '5JTdiyfDyCTqRKGP0YrZMGRQF-I' 
});

const uploadCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null;
        }
        const response =await cloudinary.uploader.upload(localFilePath, {resource_type: "auto"}, function(error, result) {console.log(result, error)});
        console.log(response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
    }

module.exports = uploadCloudinary;