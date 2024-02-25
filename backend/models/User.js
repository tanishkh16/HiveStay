// Using export statement
import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true
  },
lastName:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },

  password: {
    type: String,
    required:true,
  },
  rollNumber:{
    type:Number,
    required:true,
  },
  roomNumber:{
    type:Number,
    required:true,
  },
  branch:{
    type:String,
    required:true,
  },
  mess:{
    type:String,
    required:true,
  },
  mobileNumber:{
    type:String,
    required:true,
  },
  homeMobileNumber:{
    type:Number,
    required:true,
  },
  address:{
    type:String,
    required:true,
  },
});

const User = mongoose.model("User", newSchema);

export default User;
