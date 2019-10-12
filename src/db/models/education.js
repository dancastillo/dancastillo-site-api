import { Schema, model } from 'mongoose';

const educationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  abbreviation: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  minor: {
    type: String,
    required: fasle
  }
});

export default model('Education', educationSchema);
