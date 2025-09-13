// Simple English → Nepali dictionary
const dictionary = {
  "hello": "नमस्ते",
  "how are you": "तिमीलाई कस्तो छ?",
  "good morning": "शुभ प्रभात",
  "good night": "शुभ रात्री",
  "thank you": "धन्यवाद",
  "i love nepal": "म नेपाललाई माया गर्छु",
  "what is your name": "तिम्रो नाम के हो?",
  "my name is nitish": "मेरो नाम नितीश हो"
};

// Chat handler (English → Nepali)
export async function handleChat(user, text) {
  const lower = text.toLowerCase().trim();
  let translated = dictionary[lower];

  if (!translated) {
    translated = "माफ गर्नुहोस्, मैले बुझिनँ।"; // fallback if not found
  }

  return {
    userMessage: text,
    botReply: translated
  };
}
