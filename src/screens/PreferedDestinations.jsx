
import { Fragment, useState } from 'react'
import { Disclosure, Listbox, Menu, Transition } from '@headlessui/react'
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import NavBar from '../components/Navbar'
import StarRatingComponent from "react-rating-stars-component";
import {useSelector} from "react-redux"

const user = {
  name: 'Whitney Francis',
  email: 'whitney.francis@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Jobs', href: '#', current: false },
  { name: 'Applicants', href: '#', current: false },
  { name: 'Company', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const tabs = [
  { name: 'Applied', href: '#', count: '2', current: false },
  { name: 'Phone Screening', href: '#', count: '4', current: false },
  { name: 'Interview', href: '#', count: '6', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false },
]
const candidates = [
  {
    name: 'Emily Selman',
    email: 'emily.selman@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    applied: 'January 7, 2020',
    appliedDatetime: '2020-07-01T15:34:56',
    status: 'Completed phone screening',
    text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ipsam amet excepturi expedita consectetur cumque repellat dolores dolorem adipisci enim?"
  },
  // More candidates...
]
const publishingOptions = [
  { name: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true },
  { name: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PreferedDestinations() {
  const [selected, setSelected] = useState(publishingOptions[0])

  const state = useSelector(state=>state.PreferedDestinations)
  console.log(state)
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        {/* Navbar */}
        <NavBar/>
        <main className="pt-8 pb-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">
              <h2 className="text-lg font-medium text-gray-900">TOP DESTINATIONS FOR 2022</h2>
            </div>

            {/* Stacked list */}
            <ul role="list" className="mt-5 divide-y divide-gray-200 border-t border-gray-200 sm:mt-0 sm:border-t-0">
              {state.map((state) => (
                <li key={state.id} className="mb-4">
                  <a href="#" className="group block">
                    <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0 shadow-md border hover:shadow-lg">
                      <div className="flex min-w-0 flex-1 items-center px-4">
                        <div className="flex-shrink-0">
                          <img
                            className="h-12 w-24 rounded group-hover:opacity-75"
                            src={state.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-1 px-4 grid grid-cols-4 items-center md:gap-4">
                          <div>
                            <p className="truncate text-sm font-medium text-purple-600">{state.name}</p>
                            <p className="mt-2 flex items-center text-sm text-gray-500">
                            <CheckCircleIcon
                                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400"
                                  aria-hidden="true"
                                />
                              <span className="truncate">{state.country}</span>
                            </p>
                          </div>
                          <div className="hidden md:block col-span-3">
                            <div>
                              <p className="text-sm text-gray-900">
                              {state.note}
                              </p>
                            </div>
                          </div>
                        </div>
                        <StarRatingComponent
                            starCount={5}
                            size={24}
                            value={state.rating}
                            edit={false}
                            isHalf={true}
                        />
                      </div>
                      <div>
                      
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            
          </div>
        </main>
      </div>
    </>
  )
}
