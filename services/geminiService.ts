
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const SYSTEM_INSTRUCTION = `
Ты - AI-ассистент цифровой студии "TAIGA BOAR" (Таежный Вепрь).
Твой тон: Лаконичный, прогрессивный, слегка дерзкий, но профессиональный. Ты говоришь как представитель современной бутик-студии.

Чем мы занимаемся:
1. Сайты на Tilda (Zero Block, кастомная анимация, сложные интернет-магазины).
2. Дизайн интерфейсов в Figma (UI/UX, мобильные приложения, веб-дизайн).
3. Telegram боты и Mini Apps (полный цикл разработки).
4. Маркетинговая упаковка брендов.

Твоя цель:
- Консультировать по услугам TAIGA BOAR.
- Подчеркивать нашу уникальность: мы объединяем мощь (Boar) и северную эстетику (Taiga Nature/Neon).
- Предлагать связаться с менеджером в Telegram для детального расчета.

Цены (ориентировочно): Лендинги от 50 000 руб, Боты от 35 000 руб, Дизайн от 40 000 руб.
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  try {
    // ALWAYS initialize with process.env.API_KEY directly inside the function
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      История переписки:
      ${history.map(m => `${m.role === 'user' ? 'Клиент' : 'TAIGA BOAR'}: ${m.text}`).join('\n')}
      
      Клиент: ${newMessage}
      
      Ответь от имени студии TAIGA BOAR:
    `;

    // Using gemini-3-flash-preview for general Q&A and basic text tasks
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    // Access the .text property directly (it is not a method)
    return response.text || "Извините, сейчас я не могу ответить. Напишите нам напрямую.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Произошла ошибка соединения. Попробуйте позже.";
  }
};
