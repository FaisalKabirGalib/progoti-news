import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from '../components/NewsItem';
import { TwoItemGrid } from '../Layouts/MainLayout';
// import { catergoryType, navbarList } from '../Layouts/Navbar';
import { newsItemList } from './Home.page';
import useFetchNews from '../hooks/useFetchNews';
import { processDataFromCategory } from '../components/DashBoard';

export interface IAboutPageProps {
}

export const AboutPage: FC<IAboutPageProps> = ({ }) => {
    const { cat, sub } = useParams()

    const { data } = useFetchNews(sub ? 'news/' + sub : 'news/' + cat)

    if (data) {
        return <TwoItemGrid>
            {processDataFromCategory(data).map(({ heading, img, description, id }, index) => <NewsItem title={heading} image={img} id={index} description={description} />)}
        </TwoItemGrid>
    }

    return (


        <>



            no item found


            {/* {newsItemList.sort().map((item, index) => <NewsItem {...item} id={index} />)} */}

        </>

    );
}

