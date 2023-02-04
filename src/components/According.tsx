
import { FC } from 'react';
import { NAVBARITEMS } from '../data/constant';
import AccordItem from '../Layouts/NavBar/AccordItem';

export interface IAccordingProps {
}
const archiveItems = [
    {
        label: { en: 'Probondho', bn: 'প্রবন্ধ' },
        type: 'link',
    },
    {
        label: { en: 'Nibondho', bn: 'নিবন্ধ' },
        type: 'link',
    },
    {
        label: { en: 'Natok', bn: 'নাটক' },
        type: 'link',
    },
    {
        label: { en: 'Uponnas', bn: 'উপন্যাস' },
        type: 'link',
    },
    {
        label: { en: 'Golpo', bn: 'গল্প' },
        type: 'link',
    },
    {
        label: { en: 'Kobita', bn: 'কবিতা' },
        type: 'link',
    },
    {
        label: { en: 'Chora', bn: 'ছড়া' },
        type: 'link',
    },
    {
        label: { en: ' Muktijodha', bn: 'মুক্তিযুদ্ধ' },
        type: 'link',
    },
    {
        label: { en: 'BiseshRochona', bn: 'বিশেষ রচনা' },
        type: 'link',
    },
    {
        label: { en: 'VromonKahini', bn: 'ভ্রমণকাহিনী' },
        type: 'link',
    },
    {
        label: { en: 'Onugolpo', bn: 'অনুগল্প' },
        type: 'link',
    },
    {
        label: { en: 'Sriticharon', bn: 'স্মৃতিচারণ' },
        type: 'link',
    },
]

const progotiItems = [
    {
        label: { en: 'progoti-1', bn: 'প্রথম সংখ্যা ~ শ্রাবণ ১৪২১ বঙ্গাব্দ ।। জুন-জুলাই ২০১৪ খ্রিস্টাব্দ' },
        type: 'link',
    },
    {
        label: { en: 'progoti-2', bn: 'দ্বিতীয় সংখ্যা ~ আশ্বিন ১৪২১ বঙ্গাব্দ ।। সেপ্টেম্বর-অক্টোবর ২০১৪ খ্রিস্টাব্দ' },
        type: 'link',
    },
    {
        label: { en: 'progoti-3', bn: 'তৃতীয় সংখ্যা ~ ফাল্গুন ১৪২১ বঙ্গাব্দ ।। ফেব্রুয়ারি-মার্চ ২০১৫ খ্রিস্টাব্দ' },
        type: 'link',
    },
    {
        label: { en: 'progoti-4', bn: 'চতুর্থ সংখ্যা ~ ভাদ্র ১৪২২ বঙ্গাব্দ ।। আগস্ট-সেপ্টেম্বর ২০১৫ খ্রিস্টাব্দ' },
        type: 'link',
    },
    {
        label: { en: 'progoti-5', bn: 'পঞ্চম সংখ্যা ~ চৈত্র ১৪২২ বঙ্গাব্দ ।। মার্চ-এপ্রিল ২০১৬ খ্রিস্টাব্দ' },
        type: 'link',
    },
    {
        label: { en: 'progoti-6', bn: 'ষষ্ঠ সংখ্যা ~ মাঘ ১৪২৩ বঙ্গাব্দ ।। জানুয়ারি-ফেব্রুয়ারি ২০১৭ খ্রিস্টাব্দ' },
        type: 'link',
    },
    {
        label: { en: 'progoti-7', bn: 'সপ্তম সংখ্যা ~ অগ্রহায়ণ ১৪২৪ বঙ্গাব্দ ।। নভেম্বর-ডিসেম্বর ২০১৭ খ্রিস্টাব্দ' },
        type: 'link',
    },
    {
        label: { en: 'progoti-8', bn: 'অষ্টম সংখ্যা ~ ভাদ্র ১৪২৯ বঙ্গাব্দ ।। আগস্ট-সেপ্টেম্বর ২০২২ খ্রিস্টাব্দ' },
        type: 'link',
    },
    {
        label: { en: 'progoti-9', bn: 'নবম সংখ্যা ~ চৈত্র ১৪২৯ বঙ্গাব্দ ।। মার্চ-এপ্রিল ২০২৩ খ্রিস্টাব্দ' },
        type: 'link',
    },
    {
        label: { en: 'progoti-10', bn: 'অগ্রহায়ণ ১৪৩০ বঙ্গাব্দ ।। নভেম্বর-ডিসেম্বর ২০২৩ খ্রিস্টাব্দ' },
        type: 'link',
    },
]

const According: FC<IAccordingProps> = ({ }) => {
    return (
        <section>
            <AccordItem heading={'প্রগতিপত্র'}>
                <ul className='list-none flex-col'>
                    {progotiItems.map((item, index) => {
                        return (
                            <li className='border-b-2 border-blue-300 p-2' key={index}>{item.label.bn}</li>
                        )
                    })
                    }

                </ul>
            </AccordItem>
            <div className="h-10"></div>
            <AccordItem heading={'আর্কাইভ'}>
                <ul className='list-none flex-col'>
                    {archiveItems.map((item, index) => {
                        return (
                            <li className='border-b-2 border-blue-300 p-2' key={index}>{item.label.bn}</li>
                        )
                    })}
                </ul>
            </AccordItem>

        </section>

    );
}
export default According


// <Accordion >
{/* <Accordion.Panel>
<Accordion.Title>
    Azker News
</Accordion.Title>
<Accordion.Content>


    <ul className='list-none flex-col'>
        <li className='border-b-2 border-blue-300 p-2'>Reprehenderit veniam nisi irure tempor cillum anim.</li>
        <li className='border-b-2 border-blue-300 p-2'>Reprehenderit veniam nisi irure tempor cillum anim.</li>
        <li className='border-b-2 border-blue-300 p-2'>Reprehenderit veniam nisi irure tempor cillum anim.</li>
        <li className='border-b-2 border-blue-300 p-2'>Reprehenderit veniam nisi irure tempor cillum anim.</li>


    </ul>

</Accordion.Content>
</Accordion.Panel>
<Accordion.Panel>
<Accordion.Title>
    Is there a Figma file available?
</Accordion.Title>
<Accordion.Content>
    <ul className='list-none flex-col'>
        <li className='border-b-2 border-blue-300 p-2'>Ea magna enim commodo proident non commodo amet dolore nostrud ad irure est nulla.</li>
        <li className='border-b-2 border-blue-300 p-2'>Consequat non velit non non et minim in elit laboris ullamco sunt quis deserunt et.</li>
        <li className='border-b-2 border-blue-300 p-2'>Ex occaecat id veniam sint cupidatat.</li>
        <li className='border-b-2 border-blue-300 p-2'>Magna anim adipisicing eiusmod Lorem do veniam non.</li>


    </ul>
</Accordion.Content>
</Accordion.Panel>
<Accordion.Panel>
<Accordion.Title>
    What are the differences between Flowbite and Tailwind UI?
</Accordion.Title>
<Accordion.Content>
    <p className="mb-2 text-gray-500 dark:text-gray-400">
        The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
    </p>
    <p className="mb-2 text-gray-500 dark:text-gray-400">
        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
    </p>
    <p className="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about these technologies:
    </p>
    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
        <li>
            <a
                href="https://flowbite.com/pro/"
                className="text-blue-600 hover:underline dark:text-blue-500"
            >
                Flowbite Pro
            </a>
        </li>
        <li>
            <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 hover:underline dark:text-blue-500"
            >
                Tailwind UI
            </a>
        </li>
    </ul>
</Accordion.Content>
</Accordion.Panel>
</Accordion> */}