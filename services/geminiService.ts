import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MENU_ITEMS, RESTAURANT_NAME } from '../constants';

const apiKey = process.env.API_KEY || '';
// Initialize safety check - component should handle missing key UI
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getConciergeResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I apologize, but I am currently offline. Please contact our staff directly.";
  }

  // Construct a menu context string
  const menuContext = MENU_ITEMS.map(item => 
    `- ${item.name} (${item.course}): ${item.description} - $${item.price} ${item.dietary ? `[${item.dietary.join(', ')}]` : ''}`
  ).join('\n');

  const systemInstruction = `
    You are the AI Concierge for ${RESTAURANT_NAME}, a premium fine dining restaurant.
    Your tone is sophisticated, polite, and helpful, like a world-class Maître d'.
    
    Here is our current menu:
    ${menuContext}

    Guidelines:
    1. Recommend specific dishes based on the user's preferences (taste, dietary needs, mood).
    2. Suggest wine or drink pairings if appropriate.
    3. Keep responses concise (under 100 words) but elegant.
    4. If asked for items not on the menu, politely steer them back to what we offer.
    5. Do not hallucinate prices or items.
    6. If asked about reservations, encourage them to use the "Reservations" tab.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // slightly creative but grounded
      }
    });

    return response.text || "I apologize, I didn't quite catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing a high volume of inquiries. Please ask a member of our staff for assistance.";
  }
};
