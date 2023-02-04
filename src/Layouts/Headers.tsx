
import { FC } from 'react';

import Navbar from './Navbar';
import LogoImg from '../assets/logo.png'
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
                <img src={LogoImg} height={200} width={600} />
                <div className="h-3"></div>
                <p>
                    রেজি, ডিএ ৪৫৬ ।। বর্ষ ৫৩ ।। সংখ্যা ২৫ ।। {bnDateTime()}
                </p>
                <div className="h-6"></div>
            </div>

            <Navbar />
        </header>
    );
}
export default Headers


// অভিমত
// ফিচার পাতা
// নারীমুক্তি
// বিজ্ঞান প্রযুক্তি স্বাস্থ্য
// প্রকৃতি ও পরিবেশ
// শিল্প সাহিত্য সংস্কৃতি
// সংগঠন সংবাদ
// শেষের পাতা
// আর্কাইভ