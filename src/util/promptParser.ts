import { quiz } from "@/constants/questions"


const { questions } = quiz;

export const promptParser = (id: number[]) => {
    if (id.length != questions.length) return false;

    let choices: string[] = [];
    const questionList = questions.map((question) => question.question);

    for (const answer in id) {
        questions.forEach((question) => {
            choices.push(question.choices[answer]);
        });
    }

    let arrayResponse: string[] = [];

    for (const question in questionList) {
        arrayResponse = choices.map((choice) => (
            `${question} | ${choice}`
        ));
    }

    const response = arrayResponse.join('|||');


    return response;
}