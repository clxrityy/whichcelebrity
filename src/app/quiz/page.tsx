import { quiz } from '@/constants/questions';

import Quiz from '@/components/Quiz';


const Page = () => {

    const { questions } = quiz;

    return (
        <div className=''>
            <div className='w-full flex justify-center flex-col items-center'>
                <div className='flex flex-col items-center space-y-4'>
                    <h3 className='text-sm md:text-base lg:text-lg xl:text-xl font-bold shadow-sm'>
                        Which Celebrity Are You?
                    </h3>
                </div>

                <div>
                    <div className='p-[2.5rem] md:p-[5rem]'>
                        <Quiz questions={questions} />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Page;