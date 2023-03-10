import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'


import PopDropDownItem from './NavBar/PopDropDownItem'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavRederer from './NavBar/NavRederer'


export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}




export default function Example() {
    const { pathname } = useLocation()
    return (
        <Popover className="relative bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                        <NavRederer />
                        {/* {navbarList.map((item, index) => {
                            if (item.submenu.length > 0) {
                                return <PopDropDownItem key={index} items={item.submenu.map(it => {
                                    return {
                                        level: it ?? '',
                                        route: `/news/${item.en}/${item.ensubmenu![item.submenu.indexOf(it)]}`
                                    }
                                })} label={item.name} />
                            }

                            return <Link key={index} to={`/news/${item.en}`} className={`text-base font-medium text-gray-500 hover:text-gray-900 ${pathname === `/news/${item.en}` ? 'bg-orange-400' : ''}`} >
                                {item.name}
                            </Link>
                        })} */}

                    </Popover.Group>

                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {/* <NavRederer /> */}
                                    {/* {navbarList.map((item, index) => {
                                        if (item.submenu.length > 0) {
                                            return <PopDropDownItem key={index} items={item.submenu.map(it => {
                                                return {
                                                    level: it ?? '',
                                                    route: `/news/${item.name}/${it}`
                                                }
                                            })} label={item.name} />
                                        }

                                        return <Link key={index} to={`/news/${item.name}`} className="text-base font-medium text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </Link>
                                    })} */}

                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 py-6 px-5">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Pricing
                                </a>

                                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Docs
                                </a>
                                {/* {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))} */}
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
