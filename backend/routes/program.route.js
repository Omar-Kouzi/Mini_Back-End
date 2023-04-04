import express from "express";
import programController from "../controllers/program.controller.js";
import  upload  from "../middleware/uploadmiddleware.js";
const router = express.Router();

router.route("/create").post(upload.single("image"),programController.createProgram);

// router.route("/create").post(programController.createProgram);
router.route("/gets").get(programController.getAllPrograms);
router.route("/get").get(programController.getProgramsById);
router.route("/delete").delete(programController.deleteProgramsById);

export default router;
