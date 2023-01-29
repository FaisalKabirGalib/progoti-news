import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TwoItemGrid } from '../Layouts/MainLayout';
import { newsItemList } from './Home.page';

export interface INewsDetailsPageProps {
}

const NewsDetailsPage: FC<INewsDetailsPageProps> = ({ }) => {
    const { id } = useParams()
    const { title, description, image } = newsItemList[Number(id)]
    return (
        <TwoItemGrid>
            <div className='md:col-span-2 sm:col-span-1 max-w-[100vw]'>
                {image && <div className='flex items-center justify-center'>
                    <img className='lg:max-w-lg  object-cover md:h-68 sm:max-w-full' src={image} alt={title} />
                </div>}

                <div className="h-10"></div>

                <h1 className='font-bold text-gray-800 text-2xl'>{title}</h1>
                <div className="h-10"></div>
                <p className='text-left text-gray-500'>{description}</p>
            </div>
        </TwoItemGrid>
    );
}
export default NewsDetailsPage
