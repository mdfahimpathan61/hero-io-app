
import { Link, useLoaderData } from 'react-router';
import { getId, deleteId } from './../../utilities/addToDB'
import { Download, Star } from 'lucide-react';
import { useState } from 'react';

const InstalledApps = () => {
    //const appsData = useLoaderData()
    const storedId = getId()
    const allApps = useLoaderData()


    const installedApps = storedId.map((id) => {
        const installedApp = allApps.find(app => app.id == id)
        return installedApp
    })
    console.log(installedApps)
    const [installedAppState, setInstalledAppState] = useState(installedApps)
    const handleSort = () => {
        const sortedApps = installedApps.sort((a, b) => a.size - b.size)
        setInstalledAppState(sortedApps)
    }

    const handleUninstall = (id) => {
        const remainingApps = installedAppState.filter(app => app.id != id)
        setInstalledAppState(remainingApps)
    }

    return (

        <div>
            <div className='bg-gray-100 pt-10'>
                <div className=' pb-15 text-center px-2'>
                    <h1 className='text-4xl font-bold mb-4'>Your Installed Apps</h1>
                    <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='lg:max-w-340 mx-auto my-3 px-2 items-center flex justify-between'>
                    <h3 className='text-xl font-bold mb-3 md:mb-0'>({installedApps.length}) Apps found</h3>

                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded z-1 w-20 p-2 shadow-sm">
                            <li onClick={() => handleSort()}><a>Size</a></li>

                        </ul>
                    </div>
                </div>
                <hr className='border-gray-300' />
                <div className='lg:max-w-360 mx-auto pb-4'>
                    {installedApps.length == 0 ?
                        <div className='text-center py-7 '>
                            <h1 className='text-red-400 text-2xl font-bold p-4'>No Installed App!.. </h1>
                            <Link to={"/apps"}>
                            <button   className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white mt-3'>Go Back</button>
                        </Link>
                        </div> :
                        installedAppState.map(app => {
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
                                    <button onClick={() => { deleteId(app.id), handleUninstall(app.id) }} className='btn text-white p-2 bg-green-400 w-full'>UnInstall </button>
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