import { GoogleGenAI, Type } from "@google/genai";
import type { UserPreferences, StyleAdvisorInput } from '../types';
import { mockProducts } from '../constants';

// Removed `as string` cast for the API key to align with guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const womenCategories = ['Sarees', 'Salwar Kameez', 'Lehenga Choli', 'Kurtas', 'Accessories'];
const menCategories = ['Menswear', 'Kurtas', 'Accessories'];

export const getAIStyleAdvice = async (
  userInput: StyleAdvisorInput
): Promise<{ productId: number, explanation: string } | null> => {
  try {
    const relevantCategories = userInput.segment === 'Womenswear' ? womenCategories : menCategories;
    
    const productCatalog = mockProducts
      .filter(p => relevantCategories.includes(p.category))
      .map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        description: p.description
      }));

    const prompt = `
      You are an expert Indian fashion stylist for 'Glow Gearz', an e-commerce store specializing in modern and traditional Indian wear.
      A customer is looking for a personalized outfit recommendation. Here are their details:
      - Shopping for: ${userInput.segment}
      - Occasion: ${userInput.occasion}
      - Face Shape: ${userInput.faceShape}
      - Skin Tone: ${userInput.skinTone}
      - Height: ${userInput.height} cm

      Here is the available product catalog for their selected department:
      ${JSON.stringify(productCatalog, null, 2)}

      Your task is to:
      1. Analyze the customer's details and the product catalog.
      2. Select the single best product that would be most flattering and appropriate.
      3. Provide a personalized explanation for your choice. The explanation should be encouraging and act like a personal stylist. Explain WHY the outfit is a good match based on their face shape (e.g., neckline), skin tone (e.g., color), height (e.g., silhouette), and the specified occasion.

      Your response must be a JSON object that strictly follows this schema. Do not include any other text, explanations, or markdown formatting.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommended_product_id: {
              type: Type.NUMBER,
              description: "The ID of the single best product for the user."
            },
            explanation: {
              type: Type.STRING,
              description: "A detailed, personalized explanation for the recommendation."
            }
          },
          required: ["recommended_product_id", "explanation"]
        }
      }
    });
    
    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);

    if (result && typeof result.recommended_product_id === 'number' && typeof result.explanation === 'string') {
      return {
        productId: result.recommended_product_id,
        explanation: result.explanation
      };
    }
    
    return null;

  } catch (error) {
    console.error("Error fetching AI style advice:", error);
    // Return a generic fallback or null on error
    return null;
  }
};


// Note: The previous getPersonalizedRecommendations function is no longer used by the app, 
// but is kept here for reference or future use if a simpler personalization is needed again.
export const getPersonalizedRecommendations = async (preferences: UserPreferences): Promise<number[]> => {
  try {
    const productCatalog = mockProducts.map(p => ({
      id: p.id,
      name: p.name,
      category: p.category,
      description: p.description
    }));

    const prompt = `
      You are a personal shopping assistant for an e-commerce store.
      A user has provided their preferences:
      - Style: ${preferences.style}
      - Preferred Colors: ${preferences.colors.join(', ')}
      - Interested Category: ${preferences.category}

      Here is the available product catalog:
      ${JSON.stringify(productCatalog)}

      Based on the user's preferences, recommend the top 3 most suitable products.
      Your response must be a JSON object that strictly follows the provided schema.
      Do not include any other text, explanations, or markdown formatting.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommended_ids: {
              type: Type.ARRAY,
              description: "An array of product IDs that best match the user's preferences.",
              items: {
                type: Type.NUMBER,
                description: "A single product ID."
              }
            }
          },
          required: ["recommended_ids"]
        }
      }
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    
    if (result && Array.isArray(result.recommended_ids)) {
      return result.recommended_ids.filter((id: any) => typeof id === 'number');
    }

    return [];
  } catch (error) {
    console.error("Error fetching personalized recommendations:", error);
    // Fallback to a simple logic if API fails
    return mockProducts
      .filter(p => p.category === preferences.category)
      .slice(0, 3)
      .map(p => p.id);
  }
};