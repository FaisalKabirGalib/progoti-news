import { FC, } from 'react';
import { useParams } from 'react-router-dom';
import useFetchNews from '../hooks/useFetchNews';
import { processDataFromCategory } from '../components/DashBoard';
import NewsHolder from '../components/NewsHolder';

import { AllCATEGORIES } from '../data/constant';
import { Alert, Spinner } from 'flowbite-react';
import { NotFound } from '../assets/NotFound';


export interface IAboutPageProps {
}

export const AboutPage: FC<IAboutPageProps> = ({ }) => {
    const { cat, sub } = useParams()

    const { data, isLoading, error } = useFetchNews(sub ? 'news/' + sub : 'news/' + cat)

    if (isLoading) {
        return <p className='flex items-center justify-center'>
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            /></p>
    }

    if (error) {
        return <p className='flex items-center justify-center'>
            <Alert>
                {error.message}
            </Alert>

        </p>
    }
    if (data) {
        if (!data.exists()) return <div className=" flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                <p className='text-center bg-slate-100 text-2xl px-20 py-1 rounded-sm  shadow-lg'>{AllCATEGORIES[AllCATEGORIES.findIndex((item) => item.label.en === cat)].label.bn}</p>
            </div>
            <div className="h-10"></div>
            <NotFound />
            <div className="h-10"></div>
            <p className='text-2xl text-bold'>No item Found</p>
        </div>


        return <div>
            <div className="h-10"></div>
            <div className="flex items-center justify-center">
                <p className='text-center bg-slate-100 text-2xl px-20 py-1 rounded-sm  shadow-lg'>{AllCATEGORIES[AllCATEGORIES.findIndex((item) => item.label.en === cat)].label.bn}</p>
            </div>
            <div className="h-10"></div>
            <div className=" grid md:grid-cols-3 sm:grid-col-1 sm:justify-center gap-y-6 gap-x-4 max-h-min">
                {processDataFromCategory(data).map((item) => <NewsHolder {...item} />)}
            </div>
        </div>
    }

    return (
        <div className="col-span-2">
            <p>No item</p>
        </div>

    );
}

