import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsItem from '../components/NewsItem';
import { TwoItemGrid } from '../Layouts/MainLayout';
import { catergoryType, navbarList } from '../Layouts/Navbar';
import { newsItemList } from './Home.page';
import useFetchNews from '../hooks/useFetchNews';
import { processDataFromCategory } from '../components/DashBoard';

export interface IAboutPageProps {
}

export const AboutPage: FC<IAboutPageProps> = ({ }) => {
    const { cat, sub } = useParams()

    const { data } = useFetchNews(sub ? 'news/' + sub : 'news/' + cat)
    // const [newsItem, setNewsItemList] = useState<string[]>([])
    // useEffect(() => {
    //     const menu = navbarList.filter((item) => item.en === cat)
    //     if (menu.length !== 0) setNewsItemList([menu[0].name])
    //     if (menu && menu[0].submenu && sub) {
    //         const submenuIndex = menu[0].ensubmenu?.indexOf(sub as catergoryType)
    //         if (submenuIndex) {

    //             const submenu = menu[0].submenu[submenuIndex as number]
    //             setNewsItemList([menu[0].name, submenu])
    //         }
    //     }

    // }, [cat, sub])


    return (


        <TwoItemGrid>
            {/* <div className="lg:col-span-2">
                <h1 className="text-2xl font-bold text-center   bg-orange-100">{cat + '/' + sub}</h1>
            </div> */}


            {data && processDataFromCategory(data).map(({ heading, img, description, id }, index) => <NewsItem title={heading} image={img} id={index} description={description} />)}


            {/* {newsItemList.sort().map((item, index) => <NewsItem {...item} id={index} />)} */}
        </TwoItemGrid>


    );
}

