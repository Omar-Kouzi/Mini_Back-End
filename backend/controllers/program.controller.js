import Program from "../models/program.model.js";

//create

const createProgram = async (req, res) => {
  const image = req.file ? req.file.path : null;
  const { title, subTitle, description } = req.body;
  console.log(req.file);
  const image_name = req.file.originalname;
  const program = new Program({ title, subTitle, description, image: image_name });
  try {
    const savedProgram = await program.save();
    res.json({
      message: "Program created successfully",
      status: 200,
      data: savedProgram,
    });
  } catch (error) {
    res.json({
      message: "Program created failed",
      status: 203,
    });
  }
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
