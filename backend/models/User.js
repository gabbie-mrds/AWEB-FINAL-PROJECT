import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: { type: Number },
  email: { type: String },
  password: { type: String },
}, {
  collection: 'admin_users'
});

export default mongoose.model('User', userSchema);