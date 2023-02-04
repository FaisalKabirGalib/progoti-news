import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, Square2StackIcon } from '@heroicons/react/24/outline';
import { Fragment, PropsWithChildren, } from 'react';
import { FC } from 'react';

export interface IMenuMakerProps extends PropsWithChildren {
    label: string
}

const MenuMaker: FC<IMenuMakerProps> = ({ label, children }) => {

    return (
        < >
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md  text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {label}
                        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />

                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p-2 flex flex-col space-y-2">

                            {children && (children instanceof Array) ? children.map((child, index) => {
                                return <Menu.Item key={index}>
                                    {child}
                                </Menu.Item>

                            }) : children}
                        </div>
                    </Menu.Items>

                </Transition>



            </Menu>



        </>

    );
}
export default MenuMaker
