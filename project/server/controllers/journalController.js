import Journal from '../models/Journal.js';

export const getAllJournals = async (req, res) => {
  const journals = await Journal.find({ userId: req.params.userId });
  res.json(journals);
};

export const createJournal = async (req, res) => {
  const newJournal = new Journal(req.body);
  await newJournal.save();
  res.status(201).json(newJournal);
};
