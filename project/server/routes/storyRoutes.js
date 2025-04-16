import express from 'express';
import { getAllStories, createStory } from '../controllers/storyController.js';
const router = express.Router();    

router.get('/:userId', getAllStories);
router.post('/', createStory);


export default router;