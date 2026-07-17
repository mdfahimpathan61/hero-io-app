import { Download, Star, UserStar } from 'lucide-react';

import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import addToDB from './../../utilities/addToDB'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

import {getId} from'./../../utilities/addToDB'

const Appdetails = () => {
    const appData = useLoaderData()
    // console.log(appData)
    const { id } = useParams()
    

    const installedIds = getId()
    const [isInstalled, setIsInstalled]  = useState(installedIds.includes(parseInt(id)))
    //console.log(isInstalled, installedIds, parseInt(id))




    const notify = () => toast('🦄 Instalation successful.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,

    });

    const appDetails = appData.find(app => app.id == id)
    //console.log(appDetails)
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = appDetails;
    const reverseRating = [...ratings].reverse()

    return (
        <div className='bg-gray-100'>
            <div className='max-w-340 mx-auto py-15'>
                <div className='md:grid  px-2 md:grid-cols-4 gri gap-5 items-center '>
                    <div className='md:col-span-1 max-h-90 p-5'>
                        <img src={image} alt="" />
                    </div>
                    <div className="md:col-span-2">
                        <h3 className='text-2xl font-bold'>{title}</h3>
                        <small className='text-gray-500 font-lg my-3'>Developed by : <span className='text-[#632EE3]'>{companyName}</span></small>
                        <hr className=' border-gray-300 mt-3' />
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-5  py-10'>
                            <div className=''>
                                <div className='h-8 text-green-500 ml-2 '><Download /></div>
                                <small className='text-sm text-gray-500'>Download</small>
                                <h2 className='text-3xl font-bold'>{downloads / 1000000}M</h2>
                            </div>
                            <div>
                                <p className='h-8 text-yellow-400 ml-2'><Star /></p>
                                <small className='text-sm text-gray-500'>Rating</small>
                                <h2 className='text-3xl font-bold'>{ratingAvg}</h2>
                            </div>
                            <div>
                                <p className='h-8 text-violet-700 ml-2'><UserStar /></p>
                                <small className='text-sm text-gray-500'>Total Review</small>
                                <h2 className='text-3xl font-bold'>{reviews / 1000}K</h2>
                            </div>
                        </div>

                        <button onClick={() => { addToDB(id); notify(); setIsInstalled(true) }} disabled={isInstalled} className={isInstalled?" bg-green-700 rounded p-2 text-gray-900":"btn text-white p-2 bg-green-400 rounded "}>{isInstalled ? "Installed":`Install Now (${size} MB)`} </button>
                        <ToastContainer
                            position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            transition={Bounce}
                            toastStyle={{
                                fontSize: "14px",
                                minHeight: "50px",
                                width: "200px",
                                marginTop:"10px"
                            }}
                        />
                    </div>

                </div>
                <hr className=' border-gray-300 my-5' />



                <div>
                    <h2 className='text-2xl font-bold ml-3 mt-3'>Ratings</h2>

                    <div className="max-w-4/5 h-64 md:h-80 lg:h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={reverseRating} layout="vertical">
                                <XAxis type="number" />
                                <YAxis type="category" dataKey="name" width={60} />
                                <Tooltip />
                                <Bar dataKey="count" fill="#632EE3" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>


                </div>

                <div className='ml-2'>
                    <h3 className='text-2xl font-bold'>Description : </h3>
                    <p className='text-gray-500'>{description}</p>
                </div>
            </div>


        </div >
    );
};

export default Appdetails;