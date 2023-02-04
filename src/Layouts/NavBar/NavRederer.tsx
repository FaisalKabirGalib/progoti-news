
import { Popover } from '@headlessui/react';
import { ChevronDownIcon, Square2StackIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NAVBARITEMS } from '../../data/constant';
import { childType } from '../../types';

import MenuMaker from './MenuMaker';


export interface INavRedererProps {
}

const recursivelymakedropdownAndLink = (item: childType[]) => {
    return item.map(({ label, type, child }) => {
        if (type === 'dropdown') {
            return <MenuMaker label={label.en}>

                {recursivelymakedropdownAndLink(child!)}
            </MenuMaker>

        }

        return <Link key={label.en} to={`/news/${label.en}`} className=' group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900' >

            <Squares2X2Icon className='h-5 w-5 mr-2 text-purple-400 group-hover:text-gray-500' aria-hidden='true' />
            <p>{label.bn}</p>
        </Link>


    })


}

const NavRederer: FC<INavRedererProps> = ({ }) => {
    return (
        <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {NAVBARITEMS.map(({ label, type, child }) => {
                if (type === 'dropdown' && child && child.length > 0) {
                    return <MenuMaker
                        label={label.bn}
                    >
                        {recursivelymakedropdownAndLink(child)}
                    </MenuMaker>
                }

                return <Link key={label.en} to={`/news/${label.en}`} className='group flex w-full items-center rounded-md text-sm text-gray-900' >
                    <span>{label.bn}</span>

                </Link>
            })}
        </Popover.Group>
    )
}
export default NavRederer
