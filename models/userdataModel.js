const mongoose = require('mongoose');
const validator = require('validator');

const userdata = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  nsuid: {
    type: String,
    required: [true, 'Please tell us your NsuId!']
  },
  // category: {
  //   ref: 'User',
  //   type: Schema.Types.ObjectId

  // },

  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  address: {
    type: String,
    required: [true, 'Please tell us your address!']
  },
  mobileno: {
    type: String,
    min:11,
    required: [true, 'Please tell us your mobileNo!']
  },
  bloodgroup: {
    type: String,
    required: [true, 'Please tell us your BloodGroup!']
  },
  gender: {
    type: String,
    required: [true, 'Please tell us your gender!']
  },
  dateofbirth: {
    type: String,
    required: [true, 'Please tell us your Date of Birth!']
  },
  fathername: {
    type: String,
    required: [true, 'Please tell us your fathername!']
  },
  mothername: {
    type: String,
    required: [true, 'Please tell us your mothername!']
  },
  nidno: {
    type: String,
    required: [true, 'Please tell us your NidNo!']
  },
  nationality: {
    type: String,
    required: [true, 'Please tell us your nationality!']
  },
  department: {
    type: String,
    required: [true, 'Please tell us your department!']
  },
  major: {
    type: String,
    required: [true, 'Please tell us your major!']
  },
  minor: {
    type: String,
  },
  cgpa: {
    type: String,
    required: [true, 'Please tell us your Cgpa!']
  },
  dateofenrollment: {
    type: String,
    // required: [true, 'Please tell us your dateofenrollment!']
  },
  dateofcomplettion: {
    type: String,
    },
  status: {
    type: String,
  },
  photo: String,
  
});

const User = mongoose.model('Userdata', userdata);

module.exports = User