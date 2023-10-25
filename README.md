# Which Celebrity Are You?

An online quiz that utilizes AI to determine which celebrity (or famous person in history) you are the most like based on your answers to the questions provided.

No need for a database, session, or external state management tool(s).

```node
npm install
npm run dev
```

---

## Configuration

### `.env.local`

The only environment variables needed are your [OpenAI]('https://openai.com/') **organization ID** and **API key**.

```env
OPENAI_ORGANIZATION=
OPENAI_API_KEY=
```

View / create your API key: **[API keys - OpenAI API](https://platform.openai.com/account/api-keys)**.

### `~/src/constants`

Within the `/constants` directory is where you can make instant changes to the configuration of the application. You can change the color scheme, font usage, and questions/answers for the quiz.

## OpenAI

The OpenAI model is defined in `~/src/lib/openai.ts`.

```ts
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION,
});

export default openai;
```

The information being "fed" to your OpenAI query is defined within `~/src/lib/query.ts`.

**Example:**

```ts
import openai from "./openai";
import { ChatCompletionMessage } from "openai/resources/index.mjs";

const systemRoleContent = "You are capable of seeing the color of someone's aura based on how they answer questions. Your job is to look at a user's answers to specific questions and determine the color of their aura. Each question is numbered in order. The question and it's answer are separated by a |. Each question is separated by |||. Respond with a color.";

const model = 'gpt-3.5-turbo';

const query = async (prompt: string) => {

    if (prompt.length < 1) return false;

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function sleep(milliseconds: number): Promise<any> {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

    for (const item in list) {
        const res: string | ChatCompletionMessage = await openai.chat.completions.create({
            model: model,
            messages: [
                { 'role': 'system', 'content': systemRoleContent }, // Tells the AI it's job
                { 'role': 'user', 'content': prompt },
            ],
            temperature: 0.86, // Values accepted: 0 - 2. The higher the value, the more random. The lower, the more deterministic. Recommended value: 0.5 - 1.
        }).then((res) => res.choices[Number(item)].message)
            .catch((err) => `Celebrity couldn't be determined! (Error: ${err.message})`);

            await sleep(500);

            if (typeof res === 'object') {
                return res.content; // Ensure you get a string back
            }

            return res;
    }
}

export default query;
```

> The **`systemRoleContent`** variable is the *key* to establishing how you'd like the AI model to respond based on the information fed to it. If you wish to change this, you'll need to alter external parts of the code that parse through how to handle & format the response.

## API Routes

`/api/result/[id]`

The route for gathering a result is dynamic based on the ID. The ID is generated as an array of the indexes of answers chosen.
> If there are **5** questions and a user picks the **1st** choice for each question, the route would be `/api/result/00000`
