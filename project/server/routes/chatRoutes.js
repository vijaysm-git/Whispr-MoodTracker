import express from 'express';
import { getAllChats, createChat }from '../controllers/chatcontroller.js'; // Corrected import path to match the file structure
const router = express.Router();

router.get('/:userId', getAllChats);
router.post('/', createChat);       

export default router;