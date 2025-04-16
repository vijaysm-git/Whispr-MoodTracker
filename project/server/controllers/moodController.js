// server/controllers/moodController.js
import MoodEntry from '../models/moodentry.js';

export const getMoods = async (req, res) => {
  const { userId } = req.params;
  try {
    const moods = await MoodEntry.find({ userId }).sort({ date: -1 });
    if (!moods.length) {
      return res.status(404).json({ message: 'No moods found for this user.' });
    }
    res.status(200).json(moods);
  } catch (err) {
    console.error('Error fetching moods:', err);
    res.status(500).json({ message: 'Server error while fetching moods.' });
  }
};

export const createMood = async (req, res) => {
  const { userId, mood, note } = req.body;

  if (!userId || !mood) {
    return res.status(400).json({ message: 'userId and mood are required.' });
  }

  try {
    const moodEntry = new MoodEntry({ userId, mood, note });
    await moodEntry.save();
    res.status(201).json(moodEntry);
  } catch (err) {
    console.error('Error saving mood entry:', err);
    res.status(500).json({ message: 'Error saving mood entry.' });
  }
};
