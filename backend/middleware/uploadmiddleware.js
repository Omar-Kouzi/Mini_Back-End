import multer from "multer";
import fs from "fs";

const dir = "./image";
const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "." + file.storageEngine);
  },
});

const upload = multer({ storageEngine});
export default upload;
 