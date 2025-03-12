import mongoose from "mongoose";

const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
  vid: { type: Number },
  name: { type: String },
  email: { type: String },
  birthDate: { type: Date },
  workCourse: { type: String },
  companySchool: { type: String },
  phoneNum: { type: String },
  facebook: { type: String },
  address: { type: String },
  chapter: { type: String },
  committee: { type: String },
  altCommittee: { type: String },
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now },
}, {
  collection: 'volunteer_forms'
});

export default mongoose.model('Volunteer', volunteerSchema);