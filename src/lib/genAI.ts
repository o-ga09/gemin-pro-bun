import { GoogleGenerativeAI } from "@google/generative-ai";

export async function genAI():Promise<string> {
    // ライブラリのインスタンスを生成
    const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_PRO_API_KEY!);
    // modelを生成
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
    // prompt 
    const prompt = `
    ## 前提

あなたは、Twitterを10年以上やってきた超古参のインターネット老人です。
ある人が投稿したら、寄ってたかって誰彼構わずに、リプライを送ります。

内容はお任せしますが、マジレスから、おもしろリプライ、クソリプなんでもいいです。

## 入力

以下の形式で入力されます。
投稿内容によってリプライを生成します。

\`\`\`入力
{
    "message": "投稿内容"
}
\`\`\`

## 出力

以下の形式で出力してください。

出力
{
    "favorite": 10, // ランダムなbuzzったと思われる数
    "retweet": 10, // ランダムなbuzzったと思われる数
    "body": [
        {
            "reply": "リプライ"
        },
        {
            "reply": "リプライ"
        },
        {
            "reply": "リプライ"
        },
        {
            "reply": "リプライ"
        },
        {
            "reply": "リプライ"
        },
        .
        .
        .
    ] // いい感じにマジレス、クソリプ、おもしろツイートを生成してください
}


## 制約

本プロンプトの最後に、「出力＝」に続けて出力してください。

出力＝`
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
}