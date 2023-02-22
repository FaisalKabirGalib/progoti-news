
import { FC } from 'react';

import Navbar from './Navbar';

import moment from 'moment';



export interface IHeadersProps {
}


const bnDateTime = () => {

    return moment().format('LL')

}
const Headers: FC<IHeadersProps> = () => {
    return (
        <header className='my-10'>
            <div className="flex flex-col items-center">
                <img src={'https://github.com/FaisalKabirGalib/Public-Assets/blob/main/logo-update.png?raw=true'} height={200} width={600} />


                <div className="h-6"></div>
            </div>

            <Navbar />
        </header>
    );
}
export default Headers

