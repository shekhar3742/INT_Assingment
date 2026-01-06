# AI Text Classification API

This service classifies text into Complaint, Query, Feedback, or Other using an AI model.

## Tech Stack
- Node.js
- Express
- Gemini API
- dotenv

## Setup
1. Clone repository
2. Run `npm install`
3. Add Gemini API key
4. Run `npm start`

## API Usage
POST /api/classify

Request:
{
  "text": "I am unhappy with your service"
}

Response:
{
  "category": "Complaint",
  "confidence": 0.85
}

## AI Usage
- The service uses Google Gemini 2.5 Flash for text classification.
- Input text is sent to the AI model with a prompt that instructs it to classify the text into one category only.
- The AI returns a category name.
- Since the AI does not provide confidence scores, a custom confidence mapping is applied based on the category.

## Error Handling
- Returns 400 Bad Request if input text is missing
- Returns 500 Internal Server Error for AI or server failures