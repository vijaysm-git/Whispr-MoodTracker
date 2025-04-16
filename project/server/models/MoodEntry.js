// server/models/moodentry.js
import mongoose from 'mongoose';

const moodSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  mood: { type: String, required: true },
  note: { type: String, default: '' },
  date: { type: Date, default: Date.now },
});

const MoodEntry = mongoose.model('MoodEntry', moodSchema);
export default MoodEntry;
