const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title:{
    type:String,
    required:[true,'please add title'],
  },
  note: {
    type: String,
    required: [true, "please add task"],
  },
} 
);

module.exports = mongoose.model("Notes", noteSchema);