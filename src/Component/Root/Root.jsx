
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>

            <Footer></Footer>
        
            
        </div>
    );
};

export default Root;