import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: String,
  password: String, // Hashed
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);
