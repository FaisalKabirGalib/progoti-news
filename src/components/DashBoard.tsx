import { DataSnapshot } from 'firebase/database';
import { Card } from 'flowbite-react';
import { FC } from 'react';
import useFetchNews from '../hooks/useFetchNews';
import { useDeleteFromFirebase } from '../hooks/useRequestMutation';
import { INewsItem } from '../types';


export interface IDashBoardProps {
}


export const processDataFromCategory = (data: DataSnapshot) => {
    let arr: any[] = []
    data.forEach((child) => {

        arr.push({ ...child.val(), id: child.key })


    })
    return arr as Partial<INewsItem>[]

}

const DashBoard: FC<IDashBoardProps> = ({ }) => {

    const { data, isLoading, error, mutate } = useFetchNews('/news')
    const { trigger, isMutating } = useDeleteFromFirebase('deleteNews')



    const processData = (data: DataSnapshot) => {
        let arr: any[] = []
        data.forEach((child) => {
            child.forEach((child2) => {
                arr.push({ ...child2.val(), id: child2.key })
            }
            )
        })
        return arr as Partial<INewsItem>[]
        // const news = data.val()
        // const newsArr = Object.keys(news).map(key => ({ id: key, ...news[key] }))
        // return newsArr
    }

    return (
        <div>
            {isLoading && <p>loading</p>}
            {error && <p>error</p>}


            {data && processData(data).map(({ heading, cat, id, img }) => {
                return (
                    <Card key={id} className='m-4'>
                        <div className="flex items-center justify-between space-x-4">
                            {img && <img src={img} alt="" className="w-20 h-20" />}
                            <p>{isMutating ? 'Deleting....' : heading}</p>
                            {/* delete icon button */}
                            <div className="ml-auto" onClick={() => {
                                trigger({
                                    path: `/news/${cat}/${id}`
                                }, {
                                    onSuccess: () => {
                                        mutate()
                                    }
                                })
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>

                        </div>

                    </Card>
                )
            })
            }

        </div>
    );
}
export default DashBoard
