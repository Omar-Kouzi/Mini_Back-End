import express from "express";
import programController from "../controllers/program.controller.js";
import upload from "../middleware/uploadmiddleware.js";
const router = express.Router();

router.route("/").post(upload.single("image"), programController.createProgram);

// router.route("/create").post(programController.createProgram);
router.route("/").get(programController.getAllPrograms);
router.route("/id").get(programController.getProgramsById);
router.route("/:id").put(programController.updateProgram);
router.route("/").delete(programController.deleteProgramsById);

export default router;
