
import { Link, NavLink } from 'react-router';
import './navbar.css'

const Navbar = () => {
    return (
        <>








            <div className='lg:max-w-360   mx-auto'>
                <div className="navbar  ">
                    <div className="navbar-start">

                        <Link to={"/"}>
                            <div className='flex items-center gap-3'>
                            <img className='w-10' src="../../../resource/assets/logo.png" alt="" />
                            <h2 className='text-[#632EE3] font-bold'>HERO.IO</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu gap-8 menu-horizontal px-1">
                            <li> <NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/apps"}>Apps</NavLink></li>
                            <li><NavLink to={"/intallation"}>Installation</NavLink></li>
                        </ul>
                    </div>


                    <div className="navbar navbar-end">
                        <div className="dropdown dropdown-end sm:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-3 mt-3 w-32 p-2 shadow">
                                <li><NavLink to={"/"}>Home</NavLink></li>
                                <li><NavLink to={"/apps"}>Apps</NavLink></li>
                                <li><NavLink to={"/installation"}>Installation</NavLink></li>
                                <a className="btn bg-[#632EE3] text-white text-sm items-center" href='https://github.com/mdfahimpathan61' target='_blank'><span><img  className='w-7' src="../../../resource/assets/github.png" alt="" /></span>Contribute</a>
                            </ul>
                        </div>
                    </div>



                    <div className="navbar navbar-end hidden sm:grid">
                        <a className="btn bg-[#632EE3] text-white items-center" href='https://github.com/mdfahimpathan61' target='_blank'><span><img src="../../../resource/assets/github.png" alt="" /></span>Contribute</a>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Navbar;