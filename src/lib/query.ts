import { ChatCompletionMessage } from "openai/resources/index.mjs";
import openai from "./openai";

const systemRoleContent = "You are a data analyst and personality specialist who analyzes a user's answers to specific questions and matches them with a celebrity, or famous person in history, that aligns with their answers. Each question is numbered in order. The question and it's answer are separated by a |. Each question is separated by |||. Respond by stating the celebrity's name, then a description of how that celebrity matches the user. Separate the name and description with a |"

const model = 'gpt-3.5-turbo';

const query = async (prompt: string | false) => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    if (!prompt) return false;

    function sleep(milliseconds: number): Promise<any> {
        return new Promise((resolve) => setTimeout(resolve, milliseconds))
    };

    for (const item in list) {
        const res: string | ChatCompletionMessage = await openai.chat.completions.create({
            model: model,
            messages: [
                { "role": 'system', 'content': systemRoleContent },
                { "role": 'user', "content": prompt },
            ],
            temperature: 0.86,
            presence_penalty: 0,
        }).
            then((res) => res.choices[Number(item)].message)
            .catch((err) => `Celebrity couldn't be determined! (Error: ${err.message})`);
        
        await sleep(500);

        if (typeof res === 'object') {
            return res.content;
        }

        return res;
    }
};

export default query;