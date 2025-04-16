import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Import routes
import journalRoutes from './routes/journalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import moodRoutes from './routes/moodRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import storyRoutes from './routes/storyRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/journals', journalRoutes);
app.use('/api/users', userRoutes);
app.use('/api/moods', moodRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/stories', storyRoutes);

// Test route (optional)
app.get('/', (req, res) => {
  res.send('API is working 🚀');
});

// Server and DB connection
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err);
  });
