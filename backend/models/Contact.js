import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  cid: { type: Number },
  name: { type: String },
  email: { type: String },
  message: { type: String },
  date: { type: Date, default: Date.now },
}, {
  collection: 'contact_forms'
});

export default mongoose.model('Contact', contactSchema);