import express from 'express';
import { handleChat } from '../controllers/chatbot.msg.js';

const router = express.Router();

// Chat endpoint (English → Nepali)
router.post('/chat', async (req, res) => {
  try {
    const { user, text } = req.body;

    if (!text || !user) {
      return res.status(400).json({ error: "user and text are required" });
    }

    const response = await handleChat(user, text);
    res.status(200).json(response);

  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Server error, try again." });
  }
});

export default router;
