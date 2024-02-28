import mongoose from "mongoose";
const suggestionSchema = new mongoose.Schema({
    content: { type: String, required: true },
    userId: { type: String, required: true },
     createdAt: { type: Date, default: Date.now },
  });
  
  const Suggestion = mongoose.model("Suggestion", suggestionSchema);

  export default Suggestion;