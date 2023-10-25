'use client';
import { getCelebrity } from "@/util/getCelebrity";
import { Answer, Celebrity } from "@/util/types"
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { redirect } from 'next/navigation';

type Props = {
  answers: Answer[];
  resultId: number[];
}

function LoadResults({ answers, resultId }: Props) {

  const [clicked, setClicked] = useState<boolean>(false);

  const id = resultId.join('');

  const redirectToResults = () => {
    return redirect(`/quiz/result/${id}`);
  }
  if (clicked) {
    redirectToResults();
  };


  if (answers.length <= 1) return redirect('/');

  return (<div>
    {!clicked ? <button onClick={() => setClicked(true)}>
      Next...
    </button> : <AiOutlineLoading3Quarters className="animate-spin" />}
  </div>)
}

export default LoadResults;