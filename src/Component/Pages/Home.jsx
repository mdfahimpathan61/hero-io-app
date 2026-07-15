import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppD from './AppD';
import Banner from '../Banner/Banner'


const Home = () => {
    const appsData = useLoaderData()
    //console.log(appsData)

    
    const [appCounter, setAppCounter] = useState(8)
    const [showAll, setShowAll] = useState(false)


    const handleAppShow =()=>{
        
        setShowAll(!showAll)
        !showAll?setAppCounter(appsData.length):setAppCounter(8)
    }

    return (
        
        <>
        <Banner></Banner>
        <div className='bg-gray-100 pt-10'>
            <div className='lg:max-w-360 mx-auto'>
                <div className=' pb-15 text-center'>
                    <h1 className='text-4xl font-bold mb-4'>Trending Apps</h1>
                    <p className='text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-center  gap-2'>
                        {
                        appsData.slice(0, appCounter).map(app => <AppD app={app} ></AppD>)

                    }
                    </div>

                    <div className='text-center mt-5 py-5'>
                        <button onClick={() => handleAppShow()} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-2 px-4 text-white'>{showAll?"Show Less" : "Show All"}</button>
                    </div>
               
            </div>

        </div>
        </>
    );
};

export default Home;