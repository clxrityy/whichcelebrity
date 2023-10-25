export interface IQuestion {
    id: number;
    question: string;
    choices: string[];
}

export interface IQuiz {
    questions: IQuestion[];
}

export const quiz: IQuiz = {
    questions: [
        {
            id: 1,
            question: 'Do you consider yourself creative?',
            choices: [
                "I don't have the time and/or patience to be creative.",
                "I'm known to be more realistic.",
                "I can be if something sparks my interest.",
                "I believe I am creative but I don't express it as much as possible.",
                "I am always creating and thinking outside of the box."
            ],
        },
        {
            id: 2,
            question: "How 'in tune' do you feel with your emotions?",
            choices: [
                'I always know how I feel about things.',
                'I rarely doubt my own feelings.',
                "It depends on how I'm feeling.",
                "A lot of times I am unsure how I feel.",
                "I have a lot of trouble understanding them."
            ],
        },
        {
            id: 3,
            question: 'Are you more introverted or extroverted?',
            choices: [
                'I am completely introverted.',
                'Most of the time I am introverted.',
                'Sometimes I am introverted and sometimes I am extroverted.',
                'I am mostly extroverted.',
                'I am completely extroverted.'
            ],
        },
        {
            id: 4,
            question: 'How empathetic are you?',
            choices: [
                "I feel other's emotions like they are my own.",
                "I find it very easy to empathize with other people.",
                "It depends on the situation.",
                "Sometimes I am, most of the time I am not.",
                "I find it hard to grasp other people's feelings."
            ],
        },
        {
            id: 5,
            question: 'Are you a planner?',
            choices: [
                "I never plan for anything",
                "I prefer to just see what happens than to plan.",
                "I like to have certain things planned out.",
                "I need a schedule or plan for most things.",
                "I plan everything."
            ],
        },
    ]
}