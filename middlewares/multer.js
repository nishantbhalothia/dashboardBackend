const multer = require("multer");
const fs = require("fs");



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  // Allow all image formats
  console.log(file.mimetype);
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/gif") {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("Only .png, .jpg, gif and .jpeg format allowed!"));
  }
};

module.exports = multer({
  storage: storage,
  fileFilter: fileFilter,
});
