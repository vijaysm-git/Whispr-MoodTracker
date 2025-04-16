import Story from '../models/story.js';

export const getAllStories = async (req, res) => {
    const stories = await Story.find({ userId: req.params.userId });
    res.json(stories);
};

export const createStory = async (req, res) => {
    const newStory = new Story(req.body);
    await newStory.save();
    res.status(201).json(newStory);
};