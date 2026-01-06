const { GoogleGenAI } = require("@google/genai");

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const confidenceMap = {
  Complaint: 0.85,
  Query: 0.80,
  Feedback: 0.75,
  Other: 0.60
};

exports.classifyWithAI = async (text) => {
  const prompt = `
Classify the following text into ONE category only:
Complaint, Query, Feedback, Other.

Text: "${text}"

Return only the category name.
`;

  const result = await client.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }]
  });

  const category =
    result.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "Other";

  return {
    category,
    confidence: confidenceMap[category] || 0.5
  };
};
