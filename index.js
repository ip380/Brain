// Import necessary modules
import express from 'express';
import mongoose from 'mongoose';
import ollama from 'ollama';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3100;

// Middleware
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Brain App!');
});

// Route to interact with Ollama model
app.post('/api/ask-query', async (req, res) => {
  const { query } = req.body; // Get the query from request body

  try {
    const response = await ollama.chat({
      model: 'qwen2.5:1.5b', // Use the specified model
      messages: [{ role: 'user', content: query }],
    });

    // Send response back to client
    res.json({ reply: response.message.content });
  } catch (error) {
    console.error('Error interacting with Ollama:', error);
    res.status(500).send({ error: 'Error interacting with the model' });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/brainApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
