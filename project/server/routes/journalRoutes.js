import express from 'express';
import { getAllJournals, createJournal } from '../controllers/journalController.js';
const router = express.Router();

router.get('/:userId', getAllJournals);
router.post('/', createJournal);

export default router;
