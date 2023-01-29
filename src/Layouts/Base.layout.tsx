import { FC, PropsWithChildren } from 'react';
import Headers from './Headers';
import Footer from './NavBar/Footer';

export interface IBaseLayoutsProps extends PropsWithChildren {
}

const BaseLayouts: FC<IBaseLayoutsProps> = ({ children }) => (
    <div className='mx-10'>
        <Headers />
        {children}
        <Footer />
    </div>
)
export default BaseLayouts
