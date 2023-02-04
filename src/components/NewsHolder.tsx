import { Button } from 'flowbite-react';
import moment from 'moment';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { INewsItem } from '../types';
import { trancuate } from './NewsItem';

export interface INewsHolderProps extends Partial<INewsItem> {
}

const NewsHolder: FC<INewsHolderProps> = ({ heading, img, subheading, cat, date, description, id }) => {

    const navigate = useNavigate()
    return (
        <section className='border shadow-lg rounded-lg p-4'>
            {img && <img src={img} alt="" className="w-full h-64 object-contain" />}
            <div className="h-10"></div>
            <div >
                <h1 className="text-2xl text-center font-bold">{trancuate(heading ?? '', 100)}</h1>
                <p className="text-sm text-right text-gray-500">@ {subheading}</p>
                <p className="text-sm text-gray-500">{trancuate(description ?? '', 200)}</p>

                <p className="text-md text-right text-gray-500">{date ? date.toISOString() : moment().format('LLLL')}</p>
                <div className="h-6"></div>
                <div className="flex">
                    <Button className="ml-auto" onClick={() => navigate(`/news/item/${cat}/${id}`)} >Read more</Button>
                </div>

            </div>

        </section>
    );
}
export default NewsHolder
