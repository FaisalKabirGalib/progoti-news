import { FC } from 'react';
import useFetchNews from '../../hooks/useFetchNews';

export interface IAddCategoriesProps {
}

const AddCategories: FC<IAddCategoriesProps> = () => {
    const { isLoading, data, } = useFetchNews('/comments',)

    if (isLoading) {
        return <p>loading</p>
    }

    if (data?.val()) {
        const arr = Object.keys(data.val()).map(key => ({ id: key, ...data.val()[key] }))

        return (
            <div>
                {arr.map(({ comment, id }) => {
                    return (
                        <p className='shadow-md w-full p-4 m-4' key={id}>{comment}</p>
                    )
                }
                )}
            </div>
        )




    }


    return (
        <div>
            <p>add categories</p>


        </div>
    );
}
export default AddCategories
