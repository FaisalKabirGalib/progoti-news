
import { FC } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


export interface INewsItemProps {
    title: string,
    description: string,
    image?: string,
    date?: string
    id: any
}

export const trancuate = (str: string, length: number) => {
    let re = /(<([^>]+)>)/ig
    str = str.replace(re, '');
    return str.length > length ? str.substring(0, length) + '...' : str;
}

const NewsItem: FC<INewsItemProps> = ({ title, description, image, date, id }) => {
    return (
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            {image ? <a href="#">
                <img className="rounded-t-lg h-64 w-full object-contain" src={image} alt="" />
            </a> : null}
            <div className="p-5">
                <Link to="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{trancuate(title, 100)}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify ">{trancuate(description, 200)}</p>
                <div className="flex items-center justify-between">
                    <p>{date || moment(Date.now()).format('LL')}</p>
                    <Link to={`/news/item/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default NewsItem
