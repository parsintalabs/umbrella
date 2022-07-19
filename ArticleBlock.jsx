import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function ArticleBlock({article}) {
  return (
    <div className='border shadow-sm rounded-lg'>
        <div className="px-4 py-6 h-full flex-col flex">
            <div className="flex-1">
                <div className='text-xs font-medium tracking-tight space-x-1 mb-3'>
                    <Link href='#' className='text-black hover:bg-gray-200 bg-gray-100 transition duration-200 px-2 py-1 rounded-md'>
                        Laravel
                    </Link>
                    <Link href='#' className='text-black hover:bg-gray-200 bg-gray-100 transition duration-200 px-2 py-1 rounded-md'>
                        Tailwind CSS
                    </Link>
                    <Link href='#' className='text-black hover:bg-gray-200 bg-gray-100 transition duration-200 px-2 py-1 rounded-md'>
                        PHP
                    </Link>
                </div>
                <Link href='#'>
                    <h1 className='text-gray-800 font-semibold tracking-tight'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h1>
                </Link>
                <p className='text-gray-500 my-2 line-clamp-2 tracking-tighter'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quasi.
                </p>
            </div>
            <small className='text-sm text-gray-500 mt-4'>20 Nov, 2022 by Irsyad A. Panjaitan</small>
        </div>
    </div>
  )
}
