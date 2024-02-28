import mongoose from "mongoose";
import User from "../models/User.js";
import Suggestion from "../models/Suggestion.js";
import Complaint from "../models/Complaints.js";
import HolidaysApplication from "../models/HolidaysApplication.js";
import RoomMaintaince from '../models/RoomMaintaince.js'

//To find the user and its all details
export const user= async(req,res,next)=>{
  try {
    const _id = req.body;  // Assuming the user ID is in the request parameters

    try {
      const user = await User.findById(_id);  //
      // Use await to execute the query
      console.log(user)
      if (!user) {
        return res.status(404).json("This user does not exist");
      }
      return res.status(200).json({
        _id: user._id,
        firstName: user.firstName,
    lastName:user.lastName,
    email:user.email,
    rollNumber: user.rollNumber,
    roomNumber: user.roomNumber,
    branch:user.branch,
    mess: user.mess,
    mobileNumber:user.mobileNumber,
    homeMobileNumber: user.homeMobileNumber,
    address:user.address,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } catch (error) {
    console.error('There is some error in finding the user:', error);
    next(error);
  }
}

// Complaints function 
export const complaints=async(req,res,next)=>{
  try {
    const complaint = new Complaint(req.body);
    if(!complaint){
      return res.status(400).json({ error: 'Please Enter the complaints or Empty' });
    }
    await complaint.save();
    res.status(201).send("your complaints added successfully");
  } catch (error) {
    res.status(400).send(error);
  }
}
// Suggestions function
export const suggestions=async(req,res,next)=>{
  try {
    const suggestion = new Suggestion(req.body);
    if(!suggestion){
      return res.status(400).json({ error: 'Please Enter the suggestion or Empty' });
    }
    await suggestion.save();
    res.status(201).send("your suggestions added successfully");
  } catch (error) {
    res.status(400).send(error);
  }
}
// Holidays application
export  const holidaysApplication=async(req,res,next)=>{
  try {
    const holidayApplication = new HolidaysApplication(req.body);
    await holidayApplication.save();
    res.status(201).send("Your application is sended successfully");
  } catch (error) {
    res.status(400).send(error);
  }

}
//function for room maintaince like electric and civil
export const roomMaintaince=async(req,res,next)=>{
  try {
    const { userId, category, description,hostelName,roomNumber } = req.body;

    const maintenanceRequest = new RoomMaintaince({
      userId,
      category,
      description,
      hostelName,
      roomNumber
    });

    await maintenanceRequest.save();
    res.status(201).json("Your request is sended successfuly");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}