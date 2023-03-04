import { FC, useEffect, useState } from 'react';

import AddPost from '../components/Form/AddPost';
import AddCategories from '../components/Form/AddCategories';
import DashBoard from '../components/DashBoard';
import Headers from '../Layouts/Headers';
import fb from '../firebase'
import Login from './Login';
import { useNavigate } from 'react-router-dom';

export interface IAddNewsPageProps {
}


const AddNewsPage: FC<IAddNewsPageProps> = ({ }) => {
    const [isNewsPost, setIsNewPost] = useState(0)
    const nav = useNavigate()

    useEffect(() => {
        const observer = fb.auth.onAuthStateChanged((user) => {
            nav('/add-news', { replace: true })




        })

        return observer

    }, [])

    if (!fb.auth.currentUser) {
        return <Login />
    }

    return (
        <div className='flex flex-col  '>
            <Headers />
            <div className="h-20"></div>
            <div className='flex items-center mx-6'>

                <p> Hello {fb.auth.currentUser.email}</p>
                <div className="w-4"></div>
                <button className='bg-purple-500 p-2.5 rounded-md text-white shadow-md' onClick={() => fb.auth.signOut()}>Sign out</button>

            </div>
            <div className="h-8"></div>
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
