import { FC, useEffect } from 'react';
import { TextInput, Card, Label, Textarea } from 'flowbite-react'

export interface IAddNewsPageProps {
}

const AddNewsPage: FC<IAddNewsPageProps> = ({ }) => {
    useEffect(() => {
        // get(ref(firebaseApp.db, '/news/')).then((snapshot) => {
        //     console.log(snapshot.val())
        // }
        // )

    }, [])

    return (
        <div className='flex flex-col h-[100vh] min-w-lg items-center justify-center'>
            <h3>Add News</h3>
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
