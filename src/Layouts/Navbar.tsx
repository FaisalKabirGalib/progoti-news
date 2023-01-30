import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import PopDropDownItem from './NavBar/PopDropDownItem'
import { Link, useLocation } from 'react-router-dom'

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: Squares2X2Icon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: ArrowPathIcon,
    },
]
const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: LifebuoyIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkSquareIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export type catergoryType = 'prochad' | 'songothon' | 'etihas' | 'songbad' | 'commetee' | 'biggopti' | 'ovimot' | 'archive' | 'chitipotro' | 'sompadhokiyo' | 'grondhosomalochona' | 'ovimot' | 'probondho' | 'nibondho' | 'natok' | 'uponnash' | 'golpo' | 'kobita' | 'sora' | 'limeric' | 'bises rochona' | 'vromonkahini' | 'onugolpo' | 'sriticharon' | 'protrika' | 'progotipatro' | 'biggopti' | 'chobi' | 'sucipatro' | 'other'

export const navbarList: { name: string, en: catergoryType, submenu: string[], ensubmenu?: catergoryType[] }[] = [{
    name: 'প্রচ্ছদ',
    en: 'prochad',
    submenu: []
}, {
    name: 'সংগঠন',
    en: 'songothon',
    submenu: [
        'ইতিহাস', 'সংবাদ', 'কমিটি'
    ],
    ensubmenu: [
        'etihas', 'songbad', 'commetee'
    ]


}, {
    name: 'বিজ্ঞপ্তি',
    submenu: [],
    en: 'biggopti'
},
{
    name: 'অভিমত',
    en: 'ovimot',
    submenu: ['চিঠিপত্র', 'সম্পাদকীয়', 'গ্রন্থালোচনা'],
    ensubmenu: ['chitipotro', 'sompadhokiyo', 'grondhosomalochona']

},
{
    name: 'আর্কাইভ',
    en: 'archive',
    submenu: ['প্রবন্ধ', 'নিবন্ধ', 'নাটক', 'উপন্যাস', 'গল্প', 'কবিতা', 'ছড়া', 'লিমেরিক', 'বিশেষ রচনা', 'ভ্রমণকাহিনী', 'অনুগল্প', 'স্মৃতিচারণ'],
    ensubmenu: ['probondho', 'nibondho', 'natok', 'uponnash', 'golpo', 'kobita', 'sora', 'limeric', 'bises rochona', 'vromonkahini', 'onugolpo', 'sriticharon']

},
{
    name: 'পত্রিকা',
    en: 'protrika',
    submenu: ['প্রগতিপত্র'],
    ensubmenu: ['progotipatro']


},
{
    name: 'অন্যান্য',
    en: 'other',
    submenu: ['বিজ্ঞাপন', 'ছবি ', 'সূচিপত্র', 'সংবাদ'],
    ensubmenu: ['biggopti', 'chobi', 'sucipatro', 'songbad']

},
]


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
                        {navbarList.map((item, index) => {
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
                        })}

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
                                    {navbarList.map((item, index) => {
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
                                    })}

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
                                {resources.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
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
