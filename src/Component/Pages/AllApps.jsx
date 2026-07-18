import { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppD from './AppD';

const AllApps = () => {
    const appsData = useLoaderData()
    //const [search, setSearch] = useState("")
    const [apps, setApps] = useState(appsData)



    const handleSearchChange = (event) => {
        //event.preventDefault()
        //setSearch(event.target.value);
        const filteredApps = appsData.filter((app) => app.title.toLowerCase().includes(event.target.value.toLocaleLowerCase()))
        console.log(event.target.value)
        setApps(filteredApps)
    }


    return (
        <div>
            <div className='bg-gray-100 pt-10'>
                <div className=' pb-15 text-center px-2'>
                    <h1 className='text-4xl font-bold mb-4'>Our All Application</h1>
                    <p className='text-gray-400'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='mx-3 my-3 md:flex justify-between'>
                    <h3 className='text-xl font-bold mb-3 md:mb-0'>({apps.length}) Apps found</h3>

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
                        <input onChange={() => handleSearchChange(event)} type="search" required placeholder="Search Apps" />
                    </label>
                </div>
                <div className='lg:max-w-360 mx-auto'>
                {
                    apps.length == 0 ? <div className='text-center md:p-20 p-4'>
                        <img className='mx-auto w-40 md:w-1/3' src="/assets/App-Error.png" alt="" />
                        <h3 className='text-2xl md:text-4xl font-bold my-3'>OPPS!! APP NOT FOUND</h3>
                        <p className='text-gray-400 mt-2'>The App you are requesting is not found on our system.  please try another apps</p>
                        <Link to={"/apps"}>
                            <button   className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white mt-3'>Go Back</button>
                        </Link>
                        </div> : 
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center  py-5 gap-2'>
                            {
                                apps.map(app => <AppD key={app.id} app={app} ></AppD>)

                            }
                        </div>
       
                }
                </div>


            </div>

        </div>
    );
};

export default AllApps;