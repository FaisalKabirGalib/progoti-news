import { FC } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import According from '../components/According';
import useFetchNews from '../hooks/useFetchNews';
import 'react-quill/dist/quill.bubble.css'

export interface INewsDetailsPageProps {
}

const NewsDetailsPage: FC<INewsDetailsPageProps> = ({ }) => {
    const { id, par } = useParams()
    // const { title, description, image } = newsItemList[Number(id)]
    const { data, error, isLoading } = useFetchNews('/news/' + par + '/' + id)

    if (isLoading) {
        return <p>loading</p>
    }
    if (error) {
        return <p>error</p>
    }
    return (
        <div className="lg:grid md:grid-cols-4 md:gap-x-4">
            <div className="col-span-3 grid md:grid-cols-2 sm:grid-col-1 sm:justify-center gap-y-6 gap-x-4">
                <div className="flex flex-col items-center col-span-2">
                    {data?.val() && data.val()['img'] && <div className='flex items-center justify-center'>
                        <img className='lg:max-w-lg  object-cover md:h-68 sm:max-w-full' src={data.val()['img']} alt={data.val()['heading']} />
                    </div>}
                    <div className="h-10"></div>
                    <h1 className='font-bold text-gray-800 text-2xl'>{data?.val()['heading'] ?? 'No Heading'}</h1>
                    <div className="h-10"></div>
                    <p className='text-right text-gray-500'>{data?.val()['subheading'] ?? 'No subHeading'}</p>
                    <ReactQuill value={`<p>${data?.val()['description'] ?? 'No Description'}</p>`} readOnly theme={'bubble'} />

                    {/*  */}
                </div>
            </div>
            <div className='xs:hidden lg:block md:hidden '>
                <According />
            </div>

        </div>



    );
}
export default NewsDetailsPage


