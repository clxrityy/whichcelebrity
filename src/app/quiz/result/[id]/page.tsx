'use client';

import CelebrityCard from "@/components/CelebrityCard";
import { colors } from "@/constants/colors";
import { getCelebrity } from "@/util/getCelebrity";
import { parseCelebrityString } from "@/util/parseCelebrity";
import { Celebrity } from "@/util/types";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Page = ({ params }: { params: { id: string } }) => {

    const [match, setMatch] = useState<Celebrity>();
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        const fetchCeleb = async () => {
            const res = await getCelebrity(params.id);
            const celebrity = parseCelebrityString(res!);

            if (clicked && match === undefined) {
                setMatch(celebrity!);
            }
        }
        fetchCeleb();

    }, [params.id, clicked, match]);

    return (
        <div className="flex items-center justify-center w-full h-[50vh] p-[2rem]">
            {
                !clicked ? <button style={{ backgroundColor: colors.purple2 }} onClick={() => setClicked(!clicked)}>
                    Load Results
                </button> : match?.name.length ? (
                    <div className="flex flex-col space-y-10 text-center items-center">
                        <h1>
                            {match?.name!}
                        </h1>
                            <div className="description">
                                <p>
                                    {match?.description!}
                                </p>
                            </div>
                    </div>
                ) :
                    <AiOutlineLoading3Quarters size={100} className="animate-spin shadow-lg" style={{color: colors.purple}} />
            }
        </div>
    )
}

export default Page;