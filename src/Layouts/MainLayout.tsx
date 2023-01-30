import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import According from '../components/According';
import BaseLayouts from './Base.layout';
import Headers from './Headers';
import Footer from './NavBar/Footer';

export interface IMainLayoutProps {
}

export interface ITwoItemGridProps extends PropsWithChildren {
}

export const TwoItemGrid: FC<ITwoItemGridProps> = ({ children }) => {
    return (
        <div className="col-span-3 grid  sm:grid-col-1 sm:justify-center gap-y-6 gap-x-4">
            {children}
        </div>
    );
}


const MainLayout: FC<IMainLayoutProps> = () => {

    return (

        <div className='mx-10'>
            <Headers />

            <div className="lg:grid md:grid-cols-4 md:gap-x-4">
                <Outlet />
                <div className='xs:hidden lg:block md:hidden '>
                    <According />
                </div>

            </div>
            <div className="h-10"></div>

            <Footer />

        </div>

    );
}
export default MainLayout
