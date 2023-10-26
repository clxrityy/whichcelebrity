'use client';

import { colors } from "@/constants/colors";
import { getCelebrity } from "@/util/getCelebrity";
import { getImage } from "@/util/getImage";
import { parseCelebrityString } from "@/util/parseCelebrity";
import { Celebrity } from "@/util/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Page = ({ params }: { params: { id: string } }) => {

    const [match, setMatch] = useState<Celebrity>();
    const [image, setImage] = useState<string>('');
    const [clicked, setClicked] = useState<boolean>(false);

    useEffect(() => {
        const fetchCeleb = async () => {
            const res = await getCelebrity(params.id);
            const celebrity = parseCelebrityString(res!);

            if (clicked && match === undefined) {
                setMatch(celebrity!);
            }

            if (match !== undefined && !image.length) {
                const img = await getImage(match.name);
                if (img !== undefined && !image.length) {
                    setImage(img);
                }
            }
        }
        fetchCeleb();

    }, [params.id, clicked, match, image]);

    return (
        <div className="flex items-center justify-center w-full h-[80vh] p-[2rem]">
            {
                !clicked ? <button style={{ backgroundColor: colors.purple2 }} onClick={() => setClicked(!clicked)}>
                    Load Results
                </button> : match?.name.length ? (
                    <div className="flex flex-col space-y-10 text-center items-center">
                        <div className="flex flex-col items-center justify-center space-y-4">

                            <h1>
                                {match?.name!}
                            </h1>

                        </div>
                        <div className="description">
                            <p>
                                {match?.description!}
                            </p>
                            {image.length ? <Image src={image} height={250} width={250} alt={match.name} className="rounded-md hover:scale-105 transition-all cursor-pointer" /> : <AiOutlineLoading3Quarters size={50} className="animate-spin" />}
                        </div>
                    </div>
                ) :
                    <AiOutlineLoading3Quarters size={100} className="animate-spin shadow-lg" style={{ color: colors.purple }} />
            }
        </div>
    )
}

export default Page;