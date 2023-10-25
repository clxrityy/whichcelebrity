'use client';
import { colors } from "@/constants/colors";
import { IQuestion } from "@/constants/questions";
import { useState } from "react";
import { Answer } from '@/util/types';
import LoadResults from "./LoadResults";
import { robotoMono } from '@/constants/fonts';

interface Props {
    questions: IQuestion[];
}

function Quiz({ questions }: Props) {

    // states
    const [questionIdx, setQuestionIdx] = useState<number>(0);
    const [checked, setChecked] = useState<boolean>(false);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [resultId, setResultId] = useState<Array<number>>([]);

    // data
    const { choices, question } = questions[questionIdx];

    // functions
    const onAnswerSelected = (choice: string, idx: number) => {
        setChecked(!checked);
        if (selectedAnswerIndex !== idx) {
            setSelectedAnswerIndex(idx);
        } else {
            setSelectedAnswerIndex(null);
        }
        setSelectedAnswer(choice);
    }

    const onNextClick = () => {
        setChecked(!checked);
        if (selectedAnswerIndex != null) {
            setResultId(resultId => [...resultId, selectedAnswerIndex]);
        }
        setSelectedAnswerIndex(null);
        setAnswers(answers => [...answers, { question: question, answer: selectedAnswer }]);
        if (questionIdx === questions.length - 1) {
            setShowResult(true);
        } else {
            setQuestionIdx(questionIdx + 1);
        }

    }

    return !showResult ? (
        <div className="quiz-container" style={{ background: `linear-gradient(${colors.purple2}, ${colors.purple})`, color: colors.white2 }}>
            <h4>
                {question}
            </h4>
            <div className="quiz-choices">
                <ul>
                    {
                        choices.map((choice, idx) => (
                            <li
                                onClick={() => onAnswerSelected(choice, idx)}
                                key={idx}
                                className={selectedAnswerIndex === idx ? 'choice-selected' : ''}
                            >
                                <span>
                                    {choice}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {checked ? (
                <button
                    style={{ backgroundColor: colors.darkPurple, color: colors.white }}
                    className="quiz-btn"
                    onClick={() => onNextClick()}
                >
                    Next
                </button>
            ) : (
                <button disabled={checked} className="quiz-btn" style={{ backgroundColor: colors.darkPurple, opacity: 0.9 }}>

                </button>
            )}
            <div className="absolute bottom-0 right-0 p-10">
                <p className='text-base md:text-lg'>

                    <span className={robotoMono.className}>
                        <span className='font-black' style={{ color: colors.yellow }}>{questionIdx + 1}</span> / {questions.length}
                    </span>
                </p>
            </div>
        </div>
    ) : <div>
        <LoadResults resultId={resultId} answers={answers} />
    </div>;
}

export default Quiz;