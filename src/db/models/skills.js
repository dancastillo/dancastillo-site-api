import { Schema, model } from 'mongoose';

const skillsSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

export default model('Skills', skillsSchema);
