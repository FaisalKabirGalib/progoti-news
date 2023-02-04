import { FC, } from 'react';
import { useParams } from 'react-router-dom';
import useFetchNews from '../hooks/useFetchNews';
import { processDataFromCategory } from '../components/DashBoard';
import NewsHolder from '../components/NewsHolder';
import NotFound from '../assets/notfound.svg'
import { AllCATEGORIES } from '../data/constant';


export interface IAboutPageProps {
}

export const AboutPage: FC<IAboutPageProps> = ({ }) => {
    const { cat, sub } = useParams()

    const { data } = useFetchNews(sub ? 'news/' + sub : 'news/' + cat)

    if (data) {
        if (!data.exists()) return <div className=" flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
                <p className='text-center bg-slate-100 text-2xl px-20 py-1 rounded-sm  shadow-lg'>{AllCATEGORIES[AllCATEGORIES.findIndex((item) => item.label.en === cat)].label.bn}</p>
            </div>
            <div className="h-10"></div>
            <img src={NotFound} />
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

