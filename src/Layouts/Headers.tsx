
import { FC } from 'react';

import Navbar from './Navbar';



export interface IHeadersProps {
}

const Headers: FC<IHeadersProps> = ({ }) => {
    return (
        <header className='my-10'>
            <div className="flex flex-col items-center">
                <img src={'http://www.weeklyekota.net/images/ekota_logo.jpg'} />
                <div className="h-3"></div>
                <p>
                    রেজি, ডিএ ৪৫৬ ।। বর্ষ ৫৩ ।। সংখ্যা ২৫ ।। ২২ জানুয়ারী, ২০২৩ ।। ৮ মাঘ ১৪২৯ ।। রবিবার
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