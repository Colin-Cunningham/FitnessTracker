const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    required: "Enter a type of workout"
  },
  name:{
    type: String,
    required: "Enter the name of the Workout"
  },
  duration: {
    type: Number,
    required: "How long will it take"
  },
   weight: {
    type: Number,
    required: "Enter Amount of weight!"
  },
  reps: {
    type: Number,
    required: "How many reps?"
  },
  sets: {
    type: Number,
    required: "How many sets?"
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
