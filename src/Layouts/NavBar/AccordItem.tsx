import { FC, PropsWithChildren, useState } from 'react';

export interface IAccordItemProps extends PropsWithChildren {
    heading: string,

}

const AccordItem: FC<IAccordItemProps> = ({ children, heading, }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <h2>
                <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border  border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={toggle}>
                    <span>{heading}</span>
                    <svg className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </h2>
            <div className={open ? "hidden" : ''} >
                <div className="p-5 font-light border  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    {children}
                    {/* <ul className='list-none flex-col'>
                        <li className='border-b-2 border-blue-300 p-2'>Ea magna enim commodo proident non commodo amet dolore nostrud ad irure est nulla.</li>
                        <li className='border-b-2 border-blue-300 p-2'>Consequat non velit non non et minim in elit laboris ullamco sunt quis deserunt et.</li>
                        <li className='border-b-2 border-blue-300 p-2'>Ex occaecat id veniam sint cupidatat.</li>
                        <li className='border-b-2 border-blue-300 p-2'>Magna anim adipisicing eiusmod Lorem do veniam non.</li>
                    </ul> */}
                </div>
            </div>
        </>
    );
}
export default AccordItem
