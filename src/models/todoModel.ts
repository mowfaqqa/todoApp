import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    name: {
      type: String,
      required: [true, "must provide name of todo"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  });

  var Todos = mongoose.model('todos', TodoSchema)
  
  export default Todos