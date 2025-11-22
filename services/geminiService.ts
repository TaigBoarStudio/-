import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY || '';

const SYSTEM_INSTRUCTION = `
Ты - AI-ассистент веб-студии "Taiga Boar" (Таёжный Вепрь).
Местоположение: Сибирь.
Твой тон: Суровый, прямой, надежный, немногословный, но профессиональный. Ты говоришь как эксперт, который ценит качество и силу, а не пустую болтовню.
Студия занимается:
1. Разработкой сайтов (Landing page, корпоративные сайты, e-commerce).
2. Telegram ботами (магазины, техподдержка, воронки продаж).
3. Telegram Mini Apps (полноценные веб-приложения внутри Телеграм).
4. Дизайном (соцсети, UI/UX).

Твоя цель:
- Кратко отвечать на вопросы о услугах.
- Собирать первичную информацию (какой проект нужен).
- Предлагать заполнить форму ниже или оставить контакт.

Ключевые фразы: "сибирское качество", "работаем на результат", "без лишней воды".
Если спрашивают цены: говори "от 50 000 руб", но уточняй, что все зависит от ТЗ.
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
      
      Ответь как Taiga Boar (Таёжный Вепрь):
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Извините, связь с тайгой прервалась. Попробуйте позже.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Произошла ошибка соединения. Попробуйте еще раз.";
  }
};