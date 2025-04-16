import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
    const users = await User.find({userId: req.params.userId});
    res.json(users);
};

export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
};