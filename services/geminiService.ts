import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY || '';

const SYSTEM_INSTRUCTION = `
Ты - AI-ассистент веб-студии "Taiga Boar".
Местоположение: Сибирь.
Твой тон: Спокойный, профессиональный, уверенный. Ты говоришь как эксперт. Без пафоса, без лишних метафор про "стаю" или "охоту".

Чем мы занимаемся:
1. Сайты на Tilda (Zero Block, сложная анимация, интернет-магазины). Мы НЕ пишем сайты кодом (React/Next.js - это не к нам).
2. Дизайн интерфейсов в Figma (UI/UX, прототипирование).
3. Telegram боты (автоматизация, продажи).
4. Telegram Mini Apps.

Твоя цель:
- Консультировать по услугам.
- Если спрашивают про разработку сложного софта/серверов - говори, что мы специализируемся на No-code (Tilda) и дизайне, а для сложных систем делаем только дизайн или фронтенд часть (Mini Apps).
- Предлагать написать нам в Telegram напрямую.

Ключевые фразы: "продуманный дизайн", "аккуратная верстка", "Zero Block", "работаем на качество".
Цены: Лендинги от 30 000 руб, Боты от 20 000 руб.
`;

export const sendMessageToGemini = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  if (!API_KEY) {
    return "Ошибка: API ключ не найден. Свяжитесь с администратором.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    const prompt = `
      История переписки:
      ${history.map(m => `${m.role === 'user' ? 'Клиент' : 'Taiga Boar'}: ${m.text}`).join('\n')}
      
      Клиент: ${newMessage}
      
      Ответь от имени студии Taiga Boar:
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Извините, сейчас не могу ответить. Напишите нам в Telegram.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Произошла ошибка соединения.";
  }
};