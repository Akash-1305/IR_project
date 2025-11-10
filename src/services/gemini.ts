const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_CONTEXT = `You are an expert assistant specializing ONLY in "Explainable Science Search (XIR)" - a topic related to explainable information retrieval and scientific search systems.

You should ONLY answer questions about:
- Explainable Information Retrieval (XIR)
- Explainability in scientific search systems
- Transparency in search algorithms
- Interpretable ranking models
- User understanding of search results
- Explainable AI in information retrieval contexts

If a user asks about ANY other topic, politely decline and remind them that you only answer questions about Explainable Science Search (XIR).`;

export interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export async function sendMessage(
  userMessage: string,
  conversationHistory: Message[]
): Promise<string> {
  try {
    const contents = [
      {
        role: "user",
        parts: [{ text: SYSTEM_CONTEXT }],
      },
      ...conversationHistory.map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      })),
      {
        role: "user",
        parts: [{ text: userMessage }],
      },
    ];

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        error.error?.message || "Failed to get response from Gemini"
      );
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("No response generated");
    }

    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}
