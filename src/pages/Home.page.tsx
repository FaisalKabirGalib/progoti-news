import { FC, useEffect } from 'react';
import According from '../components/According';
import NewsItem from '../components/NewsItem';

export interface IHomePageProps {
}

// create sample random news post with random image title and description
export const newsItemList = [
    {
        title: 'Duis nisi sit eiusmod consectetur consectetur nostrud incididunt nisi anim nostrud duis ut cillum.',
        description: 'Do aliquip esse fugiat veniam officia sunt aliquip dolor pariatur pariatur nisi officia Lorem. Lorem nostrud incididunt aliqua qui ullamco amet mollit. Ex nulla pariatur culpa duis in esse aliqua ex consequat culpa cupidatat.',
        image: 'https://flowbite.com/docs/images/products/apple-watch.png'

    },
    {
        title: 'Nulla pariatur ut reprehenderit anim occaecat laboris. Dolore elit commodo proident commodo occaecat. ',
        description: 'Elit Lorem incididunt commodo tempor aliquip laborum in culpa nulla. Dolore qui laboris magna in ullamco id amet Lorem ipsum. Quis adipisicing pariatur occaecat non fugiat dolore et do enim. ',
        image: 'https://flowbite.com/docs/images/blog/image-4.jpg'
    },
    {
        title: 'Fugiat qui excepteur cupidatat eiusmod velit pariatur mollit. Enim in velit proident sit anim. Nisi mollit tempor non excepteur quis velit deserunt.',
        description: 'Pariatur ut occaecat eu laborum ad irure labore enim exercitation occaecat sit aliquip.Tempor in minim eu magna incididunt. Officia fugiat ipsum proident nostrud aliqua quis nisi voluptate esse quis. Ad consectetur magna aliquip non qui incididunt laborum veniam pariatur velit laboris. Adipisicing mollit ipsum nulla nostrud ut aliqua ullamco consectetur non cupidatat cupidatat ea. Sunt cillum sit in proident consectetur non do eu laboris duis Lorem ullamco. Ipsum adipisicing quis irure culpa fugiat consequat non aliquip ipsum ut. Amet aliqua aliqua reprehenderit qui reprehenderit ad ex nostrud id laborum.',
        image: 'https://flowbite.com/docs/images/blog/image-1.jpg'
    },
    {
        title: 'Fugiat qui excepteur cupidatat eiusmod velit pariatur mollit. Enim in velit proident sit anim. Nisi mollit tempor non excepteur quis velit deserunt.',
        description: 'Pariatur ut occaecat eu laborum ad irure labore enim exercitation occaecat sit aliquip.Tempor in minim eu magna incididunt. Officia fugiat ipsum proident nostrud aliqua quis nisi voluptate esse quis. Ad consectetur magna aliquip non qui incididunt laborum veniam pariatur velit laboris. Adipisicing mollit ipsum nulla nostrud ut aliqua ullamco consectetur non cupidatat cupidatat ea. Sunt cillum sit in proident consectetur non do eu laboris duis Lorem ullamco. Ipsum adipisicing quis irure culpa fugiat consequat non aliquip ipsum ut. Amet aliqua aliqua reprehenderit qui reprehenderit ad ex nostrud id laborum.',
        image: 'https://flowbite.com/docs/images/products/apple-watch.png'
    },
    {
        title: 'Fugiat qui excepteur cupidatat eiusmod velit pariatur mollit. Enim in velit proident sit anim. Nisi mollit tempor non excepteur quis velit deserunt.',
        description: 'Pariatur ut occaecat eu laborum ad irure labore enim exercitation occaecat sit aliquip.Tempor in minim eu magna incididunt. Officia fugiat ipsum proident nostrud aliqua quis nisi voluptate esse quis. Ad consectetur magna aliquip non qui incididunt laborum veniam pariatur velit laboris. Adipisicing mollit ipsum nulla nostrud ut aliqua ullamco consectetur non cupidatat cupidatat ea. Sunt cillum sit in proident consectetur non do eu laboris duis Lorem ullamco. Ipsum adipisicing quis irure culpa fugiat consequat non aliquip ipsum ut. Amet aliqua aliqua reprehenderit qui reprehenderit ad ex nostrud id laborum.',
        image: undefined
    },

]
export const HomePage: FC<IHomePageProps> = () => {
    useEffect(() => {



    }, [])
    return (


        <div>
            <p className='bg-stone-300 px-5 py-2'>Prothom Pata</p>
            <div className="h-10"></div>
            <div className="lg:grid md:grid-cols-4 md:gap-x-4">
                <div className="col-span-3 grid md:grid-cols-2 sm:grid-col-1 sm:justify-center gap-y-6 gap-x-4">
                    {newsItemList.map((item, index) => {
                        return <NewsItem key={index} title={item.title} description={item.description} image={item.image} id={index} />
                    })
                    }
                </div>
                <div className='xs:hidden lg:block md:hidden '>
                    <According />
                </div>

            </div>
            <div className="h-10" />
        </div>


    );
}
export default HomePage
