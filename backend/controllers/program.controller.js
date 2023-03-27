import Program from "../models/program.model.js";

//create

const createProgram = async (req, res) => {
  if (!req.body.title) {
    res.status(203).json({
      status: 203,
      message: `your title is null`,
      data: null,
    });
    return 0;
  }

  const program = await Program.create(req.body);
  res.status(200).json({
    status: 200,
    message: `success`,
    data: program,
  });
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

//delete

const deleteProgramsById = async (req, res) => {
  const id = req.body.id;
  const deletedprogram = await Program.findByIdAndDelete(id);
  console.log(deletedprogram)

  if (deletedprogram) {
    return res.status(200).json({
      message: `${id} had been deleted successfully`,
    });
  } else return res.status(404).json({ message: `${id} not found` });
};

export default { getAllPrograms, getProgramsById, createProgram , deleteProgramsById};
