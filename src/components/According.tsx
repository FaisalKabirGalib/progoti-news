
import { FC } from 'react';
import AccordItem from '../Layouts/NavBar/AccordItem';

export interface IAccordingProps {
}

const According: FC<IAccordingProps> = ({ }) => {
    return (
        <section>
            <AccordItem heading={'Azker News'}>
                <ul className='list-none flex-col'>
                    <li className='border-b-2 border-blue-300 p-2'>Ea magna enim commodo proident non commodo amet dolore nostrud ad irure est nulla.</li>
                    <li className='border-b-2 border-blue-300 p-2'>Consequat non velit non non et minim in elit laboris ullamco sunt quis deserunt et.</li>
                    <li className='border-b-2 border-blue-300 p-2'>Ex occaecat id veniam sint cupidatat.</li>
                    <li className='border-b-2 border-blue-300 p-2'>Magna anim adipisicing eiusmod Lorem do veniam non.</li>
                </ul>
            </AccordItem>
            <AccordItem heading={'Azker News'}>
                <ul className='list-none flex-col'>
                    <li className='border-b-2 border-blue-300 p-2'>Ea magna enim commodo proident non commodo amet dolore nostrud ad irure est nulla.</li>
                    <li className='border-b-2 border-blue-300 p-2'>Consequat non velit non non et minim in elit laboris ullamco sunt quis deserunt et.</li>
                    <li className='border-b-2 border-blue-300 p-2'>Ex occaecat id veniam sint cupidatat.</li>
                    <li className='border-b-2 border-blue-300 p-2'>Magna anim adipisicing eiusmod Lorem do veniam non.</li>
                </ul>
            </AccordItem>
            <AccordItem heading={'Azker News'}>
                <ul className='list-none flex-col'>
                    <li className='border-b-2 border-blue-300 p-2'>Ea magna enim commodo proident non commodo amet dolore nostrud ad irure est nulla.</li>
                    <li className='border-b-2 border-blue-300 p-2'>Consequat non velit non non et minim in elit laboris ullamco sunt quis deserunt et.</li>
                    <li className='border-b-2 border-blue-300 p-2'>Ex occaecat id veniam sint cupidatat.</li>
                    <li className='border-b-2 border-blue-300 p-2'>Magna anim adipisicing eiusmod Lorem do veniam non.</li>
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