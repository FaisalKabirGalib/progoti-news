import imageCompression from 'browser-image-compression';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import { AllCATEGORIES } from '../../data/constant';
import { usePushToFirebase } from '../../hooks/useRequestMutation';
export interface IAddPostProps {
}
export function getBase64(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
}


const AddPost: FC<IAddPostProps> = ({ }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const { trigger, isMutating, error, data } = usePushToFirebase('createNews')

    const processImage = async (image?: File) => {
        if (!image) return ''
        const compressImg = await imageCompression(image, options)
        const img = await getBase64(compressImg) as string
        console.log(img);

        return img
    }
    const formSubmit = async (data: any) => {



        const image = await processImage(data.img[0])

        // if (image && image.size > 500000) {
        //     alert('file size is too big')
        //     return
        // }








        trigger({
            data: { ...data, img: image },
            path: `/news/${data.cat}`
        }, {
            onSuccess: () => {
                reset()
            }
        })
    }


    return (
        <div>

            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="h-6" />
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{"Heading"}</label>
                    <input className="input-box" {...register('heading', {
                        required: true
                    })} />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{"SubHeading"}</label>
                    <input className="input-box" {...register('subheading')} />

                </div>

                <div className="flex items-center mb-6">
                    <input id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" {...register('isFeatured')} />
                    <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Featured </label>
                </div>



                <div className="mb-6">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your Categories</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('cat')}>
                        {AllCATEGORIES.map(({ label }, i) => <option key={i} value={label.en}>{label.bn}</option>)}
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your News</label>
                    <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your news.." rows={4} {...register('description')} />
                </div>


                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="large_size">Upload Your Photo</label>
                    <input className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" {...register('img', {
                        validate: (value) => {
                            return true
                        }

                    })} />
                </div>
                <button type='submit' className='border py-2 w-full bg-cyan-700 text-white rounded-lg'>
                    Submit
                </button>

            </form>
        </div>
    );
}
export default AddPost
