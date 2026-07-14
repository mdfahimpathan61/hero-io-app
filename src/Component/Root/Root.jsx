
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router';
import Banner from '../Banner/Banner';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <Banner></Banner>
            </header>
            <Outlet></Outlet>

            <Footer></Footer>
        
            
        </div>
    );
};

export default Root;