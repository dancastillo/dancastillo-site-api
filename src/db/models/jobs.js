import { Schema, model } from 'mongoose';

const JobsSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

export default model('Jobs', JobsSchema);
