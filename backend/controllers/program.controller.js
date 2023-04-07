import Program from "../models/program.model.js";
import cloudinary from "../middleware/cloudlymiddleware.js";
//create

const createProgram = async (req, res) => {
  // const image = req.file ? req.file.path : null;
  // const { title, subTitle, description } = req.body;
  // console.log(req.file);
  // const image_name = req.file.originalname;
  // const { title, subTitle, description} = req.body;
  cloudinary.uploader.upload(req.file.path, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send('Upload failed');
    } else {
      console.log(result);
      res.send('Upload successful');
    }
})
};
//getAll

const getAllPrograms = async (req, res) => {
  const programs = await Program.find();
  res.json({
    message: "Programs",
    status: 200,
    data: programs,
  });
};

//getById

const getProgramsById = async (req, res) => {
  const id = req.body.id;

  const program = await Program.findById(id);
  if (program) {
    return res.status(200).json({
      message: `${id} Program by id`,
      data: program,
    });
  } else return res.status(404).json({ message: `${id} not found` });
};

//update

const updateProgram = async (req, res) => {
  const update = await Program.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log(req.body);

  res.status(200).json({
    message: "Updated a specific about",
    status: 200,
    data: update,
  });
};

//delete

const deleteProgramsById = async (req, res) => {
  const id = req.body.id;
  const deletedprogram = await Program.findByIdAndDelete(id);
  if (deletedprogram) {
    return res.status(200).json({
      message: `${id} had been deleted successfully`,
    });
  } else return res.status(404).json({ message: `${id} not found` });
};

export default {
  getAllPrograms,
  getProgramsById,
  createProgram,
  deleteProgramsById,
  updateProgram,
};
