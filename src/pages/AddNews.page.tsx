import { FC, useState } from 'react';

import AddPost from '../components/Form/AddPost';
import AddCategories from '../components/Form/AddCategories';
import DashBoard from '../components/DashBoard';

export interface IAddNewsPageProps {
}


const AddNewsPage: FC<IAddNewsPageProps> = ({ }) => {
    const [isNewsPost, setIsNewPost] = useState(0)




    // const { data, isLoading, error } = useSWR('fetchData', getPost)

    return (
        <div className='flex flex-col  '>
            <div className="h-20"></div>

            <div className="flex justify-around shadow-md">
                <p className={isNewsPost === 0 ? 'border border-b-purple-500 p-3 bg-cyan-50 rounded-lg' : 'p-3'} onClick={() => setIsNewPost(0)}>Add News</p>
                <p className={isNewsPost === 1 ? 'border border-b-purple-500 p-3 bg-cyan-50 rounded-lg' : 'p-3'} onClick={() => setIsNewPost(1)}>Add Categories</p>
                <p className={isNewsPost === 2 ? 'border border-b-purple-500 p-3 bg-cyan-50 rounded-lg' : 'p-3'} onClick={() => setIsNewPost(2)}>DashBoard</p>
            </div>

            <div className="mx-[20vw] ">
                {isNewsPost === 0 ? <AddPost /> : isNewsPost === 1 ? <AddCategories /> : <DashBoard />}
            </div>
        </div>

    )
}


export default AddNewsPage
