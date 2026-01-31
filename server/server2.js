const { GoogleGenAI } = require("@google/genai");
require('dotenv').config()

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "who i mahalakshmi J(Student) in Bannari Amman Insttitute of Technology",
  });
  console.log(response.text);
}ek

main();