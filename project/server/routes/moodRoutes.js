// server/routes/moodRoutes.js
import express from 'express';
import { getMoods, createMood } from '../controllers/moodController.js';

const router = express.Router();

router.get('/:userId', getMoods);  // GET moods for a user
router.post('/', createMood);      // POST a new mood

export default router;
