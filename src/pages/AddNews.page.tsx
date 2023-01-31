import { FC, useEffect } from 'react';
import { TextInput, Card, Label, Textarea } from 'flowbite-react'
import useSWR from 'swr';
import { get, ref } from 'firebase/database';
import firebaseApp from '../firebase'

export interface IAddNewsPageProps {
}

const getPost = () => get(ref(firebaseApp.db, '/news/'))
const AddNewsPage: FC<IAddNewsPageProps> = ({ }) => {


    const { data, isLoading, error } = useSWR('fetchData', getPost)

    return (
        <div className='flex flex-col h-[100vh] min-w-lg items-center justify-center'>
            {data && data.val() && Object.keys(data.val()).map((key) => {
                const { title, category, description } = data.val()[key]
                return (
                    <Card key={key} className='w-full'>
                        <div className='flex flex-col space-y-2'>
                            <Label>{title}</Label>
                            <Label>{category}</Label>
                            <Label>{description}</Label>
                        </div>
                    </Card>
                )
            })
            }
            <div className='flex-col space-y-2'>
                <TextInput placeholder='title' />
                <TextInput placeholder='category' />
                <Textarea placeholder='description' maxLength={10} />
                <button className='bg-blue-500 text-white p-2 rounded-md'>Submit</button>
            </div>
        </div>

    )
}

export default AddNewsPage
