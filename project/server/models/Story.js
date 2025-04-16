import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    storyText: String,
    image: String, // optional
    createdAt: { type: Date, default: Date.now },
  });
  
  export default mongoose.model('Story', storySchema);
  