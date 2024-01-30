import { GoogleGenerativeAI } from "@google/generative-ai";

export async function genAI():Promise<string> {
    // ライブラリのインスタンスを生成
    const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_PRO_API_KEY!);
    // modelを生成
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
    // prompt 
    const prompt = "Write a story about a magic backpack."
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}