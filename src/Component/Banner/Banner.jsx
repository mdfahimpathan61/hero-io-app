

const Banner = () => {
    return (
        <div className=' bg-gray-100 py-14'>
            <div className='max-w-360 mx-auto '>
                <div className='text-center mx-2'>
                    <h1 className='text-5xl font-bold text-black'>We Build <br /><span className='text-[#632EE3]'>Productive</span> Apps</h1>
                    <p className='text-gray-400 font-md my-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, <br /> and more exciting.Our goal is to turn your ideas into <br /> digital experiences that truly make an impact.</p>
                </div>

                <div className='flex justify-center mx-auto gap-5 max-w-4/5'>
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

                <div className="mt-15">
                    <img className="mx-auto max-w-3/4 " src="../../../resource/assets/hero.png" alt="" />
                </div>

                <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-15 text-center">
                    <h1 className="text-6xl font-bold text-white mb-15">Trusted by Millions, Built for You</h1>
                    <div className="lg:flex justify-center gap-16">
                        <div>
                            <small className="text-lg font-light text-white">Total Download</small>
                            <h2 className="text-7xl font-bold text-white">29.6M</h2>
                            <small className="text-sm font-extralight text-white">21% more than last month</small>
                            
                        </div>
                        <div>
                            <small className="text-lg font-light text-white">Total Download</small>
                            <h2 className="text-7xl font-bold text-white">29.6M</h2>
                            <small className="text-sm font-extralight text-white">21% more than last month</small>
                            
                        </div>
                        <div>
                            <small className="text-lg font-light text-white">Total Download</small>
                            <h2 className="text-7xl font-bold text-white">29.6M</h2>
                            <small className="text-sm font-extralight text-white">21% more than last month</small>
                            
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;