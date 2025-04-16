import Chat from '../models/chatModel.js';  // Corrected model import name to match the model file name

// Get all chats for a specific user
export const getAllChats = async (req, res) => {
    try {
        const chats = await Chat.find({ userId: req.params.userId });
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new chat
export const createChat = async (req, res) => {
    try {
        const newChat = new Chat(req.body);
        await newChat.save();
        res.status(201).json(newChat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
