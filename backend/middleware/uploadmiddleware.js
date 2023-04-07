import multer from "multer";



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./backend/image/");
  },
  filename: (req, file, cb) => {
    cb(null,file.originalname);
},

});

// Create instance of Multer with storage configuration
const upload = multer({ storage });

export default upload;
