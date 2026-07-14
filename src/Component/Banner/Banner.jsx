import React from 'react';

const Banner = () => {
    return (
        <div className=' bg-gray-100 py-14'>
            <div className='max-w-360 '>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold text-black'>We Build <br /><span className='text-[#632EE3]'>Productive</span> Apps</h1>
                    <p className='text-gray-400 font-md my-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, <br /> and more exciting.Our goal is to turn your ideas into <br /> digital experiences that truly make an impact.</p>
                </div>

                <div className='flex justify-center gap-5'>
                    <a href="https://play.google.com/store/games" target='_blank'>
                        <div className='flex gap-2 border border-gray-400 py-2 px-3 rounded-md            items-center'>
                        <img className='w-8' src="../../../resource/assets/playstore.png" alt="" /> <span className='font-bold'>Google Playstore</span>
                    </div>
                    </a>
                    <a  href='https://www.apple.com/app-store/' target='_blank'>
                        <div className='flex gap-2 border border-gray-400 py-2 px-3 rounded-md items-center'>
                        <img className='w-8' src="../../../resource/assets/appstore.png" alt="" /> <span className='font-bold'>App Store</span>
                    </div>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Banner;