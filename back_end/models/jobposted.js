// models/JobPost.js
//hiii
//hii
//hello
const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  jid: { type: String, required: true },
  jobTitle: { type: String, required: true },
  keySkills: { type: String, required: true },
  qualification: { type: [String], required: true },  // Array of qualifications
  stream: { type: String, required: true },
  companyName: { type: String, required: true },
  jobLocation: {
    state: { type: String, required: true },
    city: { type: String, required: true }
  },
  industryType: { type: [String], required: true },  // Array of industry types
  salary: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  experience: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  jobDescription: { type: String, required: true },
  postedBy: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
}, { timestamps: true });

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
