
import { Alert, Spinner } from 'flowbite-react';
import { FC } from 'react';
import According from '../components/According';
import { processDataFromCategory } from '../components/DashBoard';
import NewsItem from '../components/NewsItem';
import useFetchNews from '../hooks/useFetchNews';


export interface IHomePageProps {
}


export const HomePage: FC<IHomePageProps> = () => {
    const { data, isLoading, error } = useFetchNews('news/home')
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
    return (


        <div>
            <p className='bg-stone-300 px-5 py-2'>Prothom Pata</p>
            <div className="h-10"></div>
            <div className="lg:grid md:grid-cols-4 md:gap-x-4">


                <div className="col-span-3 grid md:grid-cols-2 sm:grid-col-1 sm:justify-center gap-y-6 gap-x-4 max-h-min">
                    {data && processDataFromCategory(data) && processDataFromCategory(data).map((item, index) => {
                        return <NewsItem key={index} title={item.heading ?? ''} description={item.description ?? ''} image={item.img} id={'home/' + item.id} />
                    })
                    }
                </div>
                <div className='xs:hidden lg:block md:hidden '>
                    <According />
                </div>

            </div>
            <div className="h-10" />




        </div>



    );
}
export default HomePage
