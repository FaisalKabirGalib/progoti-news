import { Card } from 'flowbite-react';
import { FC } from 'react';

export interface INewsItemProps {
}

const NewsItem: FC<INewsItemProps> = ({ }) => {
    return (
        <div className="max-w-sm">
            <Card
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <p className='text-gray-500'>Lorem minim consectetur irure sit dolor ut.Enim occaecat Lorem ipsum laboris nostrud aute ipsum id sint.</p>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                        Dec 15, 2021
                    </span>
                    <a
                        href="#"
                        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Read More
                    </a>
                </div>
            </Card>
        </div>
    );
}
export default NewsItem
