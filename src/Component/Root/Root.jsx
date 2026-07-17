
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import { Outlet, useNavigation } from 'react-router';


const Root = () => {
    const navigation = useNavigation()

    const loaderImgDiv = <>
        <div className='max-w-80 mx-auto  py-20'>
            <img className='mx-auto animate-spin max-w-3/5' src="../../../resource/assets/logo.png" alt="" />
        </div>
    </>

    return (
        <div>
            <header>
                <Navbar></Navbar>
                
            </header>
            {
                navigation.state == "loading" ?loaderImgDiv :<Outlet></Outlet>
            }
            

            <Footer></Footer>
        
            
        </div>
    );
};

export default Root;