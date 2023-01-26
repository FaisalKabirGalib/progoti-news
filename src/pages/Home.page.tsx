import { FC } from 'react';

export interface IHomePageProps {
}

export const HomePage: FC<IHomePageProps> = () => {
    return (
        <div>
            <p className='bg-stone-300 px-5 py-2'>Prothom Pata</p>
            <div className="h-10"></div>

            <div className="lg:grid md:grid-cols-4">
                <div className="col-span-3 grid grid-cols-2">
                    <div className="bg-stone-300 ">1</div>
                    <div className="bg-stone-300 ">2</div>
                    <div className="bg-stone-300 ">3</div>
                    <div className="bg-stone-300 ">4</div>
                </div>
                <div className='sm:hidden lg:block md:hidden '>
                    SideBar
                </div>

            </div>



        </div>
    );
}
export default HomePage
