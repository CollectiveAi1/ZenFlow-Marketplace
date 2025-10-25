
import { GoogleGenAI } from "@google/genai";

export const runAgentTest = async (prompt: string, systemInstruction: string): Promise<string> => {
  if (!process.env.API_KEY) {
    // In a real app, you'd want to show a more user-friendly error.
    // For this example, we simulate a helpful message if the key is missing.
    console.warn("API_KEY is not configured. Returning a mock response.");
    return new Promise(resolve => setTimeout(() => resolve(`This is a mock response for the prompt: "${prompt}". In a real environment with a valid API_KEY, this agent, acting as "${systemInstruction}", would provide a detailed, AI-generated answer.`), 1000));
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to communicate with the Gemini API. Please check your API key and network connection.");
  }
};
