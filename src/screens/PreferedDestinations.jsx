
import { useState } from 'react'
import {
  CheckCircleIcon,
} from '@heroicons/react/20/solid'
import NavBar from '../components/Navbar'
import StarRatingComponent from "react-rating-stars-component";
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import SideBar from '../components/SideBar';


export default function PreferedDestinations() {
  document.title = `AnasBooking | Prefered Destinations`
  const state = useSelector(state=>state.PreferedDestinations)
  const [open, setOpen] = useState(false)

  console.log(state)
  return (
    <>
      <div className="min-h-full">
        {/* Navbar */}
        <NavBar/>
        <SideBar open={open} setOpen={setOpen}/>
        <main className="pt-8 pb-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0 mb-4 flex justify-between items-center">
              <h2 className="text-xl font-medium text-gray-900">TOP DESTINATIONS FOR 2022</h2>
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={()=>setOpen(true)}
              >
                Add your favourite destination
              </button>
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
          <div className='mx-auto mt-8 max-w-3xl sm:px-6 lg:max-w-7xl w-full'>
            <Link
            to={"/"}
            type="button"
            className="w-full text-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Back To Homepage
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}
