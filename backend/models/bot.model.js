import mongoose from 'mongoose';

const botSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Export the model
const BotMessage = mongoose.model('BotMessage', botSchema);
export default BotMessage;
