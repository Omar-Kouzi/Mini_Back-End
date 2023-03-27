import mongoose from "mongoose";

const ProgramShema = mongoose.Schema({
  // numericId: { type: Number, required: true, unique: true },

  title: {
    type: String,
    require: true,
  },
  subTitle: String,
  descripyion: String,
  image: String,
});

// ProgramShema.pre('save', function (next) { 
//   this.numericId = parseInt(this._id.toString().slice(-9), 16);
//   next();
// });

const Program = mongoose.model("Program", ProgramShema);

export default Program;
