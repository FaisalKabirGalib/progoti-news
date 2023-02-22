import imageCompression from 'browser-image-compression';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css'
import 'react-quill/dist/quill.snow.css';
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
    maxSizeMB: 0.1,
    maxWidthOrHeight: 720,
    useWebWorker: true
}
const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "link"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["image", "video"],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    ["align", "direction"],
    ["clean"]
];

const formates = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'script',
    'align',
    'direction',
    'clean'
]


const AddPost: FC<IAddPostProps> = ({ }) => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const { trigger, isMutating, error, data } = usePushToFirebase('createNews')
    const [editor, setEditor] = useState('');

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
            data: { ...data, img: image, 'description': editor },
            path: `/news/${data.cat}`
        }, {
            onSuccess: () => {
                reset()
                setEditor('')
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
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="large_size">Upload Your Photo</label>
                    <input className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file" {...register('img', {
                        validate: (value) => {
                            return true
                        }

                    })} />
                </div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your News</label>
                <ReactQuill modules={{
                    toolbar: {
                        container: TOOLBAR_OPTIONS
                    }

                }} formats={formates} value={editor} onChange={setEditor} />

                <ReactQuill value={editor} readOnly theme={'bubble'} />

                <button type='submit' className='border py-2 w-full bg-cyan-700 text-white rounded-lg'>
                    Submit
                </button>

            </form>
        </div>
    );
}
export default AddPost
