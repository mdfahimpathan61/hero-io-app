import React from 'react';
import { useLoaderData } from 'react-router';
import { getId } from './../../utilities/addToDB'
import { Download, Star, UserStar } from 'lucide-react';

const InstalledApps = () => {
    //const appsData = useLoaderData()
    const storedId = getId()
    const allApps = useLoaderData()

    const installedApps = storedId.map((id) => {
        const installedApp = allApps.find(app => app.id == id)
        return installedApp
    })
    console.log(installedApps)

    return (

        <div>
            <div className='bg-gray-100 pt-10'>
                <div className=' pb-15 text-center px-2'>
                    <h1 className='text-4xl font-bold mb-4'>Your Installed Apps</h1>
                    <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='lg:max-w-340 mx-auto my-3 md:flex justify-between'>
                    <h3 className='text-xl font-bold mb-3 md:mb-0'>({installedApps.length}) Apps found</h3>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded z-1 w-20 p-2 shadow-sm">
                            <li><a>Size</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className='lg:max-w-360 mx-auto pb-4'>
                    {
                        installedApps.map(app => {
                            return <div className='md:flex justify-between bg-white mt-3  mx-4 items-center p-4' >
                                <div className='flex gap-4 items-center '>
                                    <div><img className='h-20 rounded-lg' src={app.image} alt="" /></div>
                                    <div className='max-h-20'>
                                        <h4 className='text-xl font-bold'>{app.title}</h4>
                                        <div className='grid grid-cols-3 gap-3 md:gap-5 items-center mt-2'>
                                            <div className=''>
                                                <div className='text-sm text-green-500 flex gap-1 items-center'><Download className='h-4' /> {app.downloads / 1000000}M</div>


                                            </div>
                                            <div>
                                                <p className='text-sm text-yellow-400  flex gap-1 items-center'><Star className='h-4' /> {app.ratingAvg}</p>


                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-400  '>{app.size} MB</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='text-center mt-3 md:mt-0 '>
                                    <button className='btn text-white p-2 bg-green-400 w-full'>UnInstall </button>
                                </div>
                            </div>
                        })
                    }
                </div>


            </div>

        </div>

    );
};

export default InstalledApps;