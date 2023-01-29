import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { FC, Fragment } from 'react';

export interface IPopDropDownItemProps {
    items: routeAndLevel[],
    label: string
}

export const classWithJsBoolean = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}

export type routeAndLevel = {
    route: string,
    level: string
}

const PopDropDownItem: FC<IPopDropDownItemProps> = ({ items, label }) => {
    return (

        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button
                        className={classWithJsBoolean(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                        )}
                    >
                        <span>{label}</span>
                        <ChevronDownIcon
                            className={classWithJsBoolean(
                                open ? 'text-gray-600' : 'text-gray-400',
                                'ml-2 h-5 w-5 group-hover:text-gray-500'
                            )}
                            aria-hidden="true"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                    {items.map(({ route, level }, index) => (
                                        <a
                                            key={index}
                                            href={route}
                                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                        >
                                            <Squares2X2Icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                            <div className="ml-4">
                                                <p className="text-base font-medium text-gray-900">{level}</p>
                                                {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                            </div>
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>

    );
}
export default PopDropDownItem
