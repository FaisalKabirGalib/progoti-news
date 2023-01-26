import { FC } from 'react';
import According from '../components/According';
import NewsItem from '../components/NewsItem';

export interface IHomePageProps {
}

export const HomePage: FC<IHomePageProps> = () => {
    return (
        <div>
            <p className='bg-stone-300 px-5 py-2'>Prothom Pata</p>
            <div className="h-10"></div>

            <div className="lg:grid md:grid-cols-4">
                <div className="col-span-3 grid md:grid-cols-2 sm:grid-col-1 sm:justify-center gap-y-6">
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                    <NewsItem />
                </div>
                <div className='sm:hidden lg:block md:hidden '>
                    <According />
                </div>

            </div>



        </div>
    );
}
export default HomePage
