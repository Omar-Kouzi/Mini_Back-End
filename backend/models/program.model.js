import mongoose from "mongoose";

const ProgramShema = mongoose.Schema({

  title: {
    type: String,
    require: true,
  },
  subTitle: String,
  description: String,
  image: {
    public_id:{
      type:String,
      require:true,
    },
    url:{
      type:String,
      require:true
    }
  },
});


const Program = mongoose.model("Program", ProgramShema);

export default Program;
