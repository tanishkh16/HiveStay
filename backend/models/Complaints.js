import mongoose from "mongoose";
const complaintSchema = new mongoose.Schema({
    content: { type: String, required: true },
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  const Complaint = mongoose.model("Complaint", complaintSchema);

  export default Complaint;