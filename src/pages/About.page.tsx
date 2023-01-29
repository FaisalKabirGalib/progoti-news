import { FC } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from '../components/NewsItem';
import { TwoItemGrid } from '../Layouts/MainLayout';
import { newsItemList } from './Home.page';

export interface IAboutPageProps {
}

export const AboutPage: FC<IAboutPageProps> = ({ }) => {
    const { cat, sub } = useParams()
    return (


        <TwoItemGrid>

            {newsItemList.sort().map((item, index) => <NewsItem {...item} id={index} />)}
        </TwoItemGrid>


    );
}

