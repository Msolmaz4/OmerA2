const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  user:{
type:mongoose.SchemaTypes.ObjectId,
ref:'User'
  },

  date: { type: Date, default: Date.now },
});

const Text = mongoose.model("Text", textSchema);
module.exports = Text;
