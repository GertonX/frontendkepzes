import Navigation from '../../components/Navigation';
import './style.css';
import { Outlet } from "react-router";


function DefaultLayout({cart}) {
    return (
        <div className='default-layout'>
            <Navigation  cart={cart}/>
            <Outlet />
        </div>
    )
}

export default DefaultLayout;