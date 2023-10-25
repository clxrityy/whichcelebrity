import { Celebrity } from "@/util/types";

type Props = {
    match: Celebrity;
}

const CelebrityCard = ({ match }: Props) => {

    console.log(match);

    return (
        <div className="flex flex-col space-y-10 justify-center items-center">
            <h1>
                {match.name}
            </h1>
            <p>
                {match.description}
            </p>
        </div>
    );
}

export default CelebrityCard;