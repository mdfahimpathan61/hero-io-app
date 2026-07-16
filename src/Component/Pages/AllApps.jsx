import React from 'react';
import { useLoaderData } from 'react-router';
import AppD from './AppD';

const AllApps = () => {
    const appsData = useLoaderData()
    return (
        <div>
            <div className='bg-gray-100 pt-10'>
                <div className='lg:max-w-360 mx-auto'>
                    <div className=' pb-15 text-center'>
                        <h1 className='text-4xl font-bold mb-4'>Our All Application</h1>
                        <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>

                    <div className='mx-3 my-3 md:flex justify-between'>
                        <h3 className='text-xl font-bold mb-3 md:mb-0'>({appsData.length}) Apps found</h3>

                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search Apps" />
                        </label>
                    </div>


                    <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center  gap-2'>
                        {
                            appsData.map(app => <AppD app={app} ></AppD>)

                        }
                    </div>



                </div>

            </div>

        </div>
    );
};

export default AllApps;