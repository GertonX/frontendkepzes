import './style.css';
import { Link } from 'react-router-dom';
import Cart from '../../components/Cart';
import { getCartItemsToRender } from '../../services/api';

function Navigation () {
    const menuItems = [
        { id:'home', name: 'Főoldal', screen: '' }, 
        { id:'products', name: 'Termékek', screen: 'products' },
        { id:'terms', name: 'ÁSZF', screen: 'products' },
        { id:'contact', name: 'Kapcsolat', screen: 'contacts' },
        { id:'game', name: 'Nyereményjáték', screen: 'game' },
        { id:'cart', name: 'Kosár', screen: 'cart' }
        
    ];

    return (
        <header className="main-header">
            <div className="container">
                <nav className="main-navigation">
                    <ul className="main-navigation-menu">
                        <img src='img/pc-icon.jpg' className='nav-icon'></img>
                    { menuItems.map((menu) =>
                    (
                        <li key={menu.id} className={menu.id === 'cart' ? 'shopping-cart' : ''}>
                            <Link to={menu.screen}>
                                {
                                    menu.id === 'cart' ? 
                                    <>
                                    <img  src='/img/cart.svg' /> 
                                    <span className='cart-counter'>0</span>
                                    </>
                                    :
                                    ''   
                                }
                                { menu.name }
                            </Link>
                            {
                                menu.id === 'cart' ?
                                <div className='dropdown'>
                                    <ul className='dropdown-cart-list'>
                                        {getCartItemsToRender().map((item) => 
                                        <li key={item.id}>
                                            <span className='dropdown-cart-item-name'>
                                                

                                            </span>

                                            <span className='dropdown-cart-item-quantity'>
                                                1 db
                                            </span>

                                            <span className='dropdown-cart-item-price'>
                                                138 648 Ft
                                            </span>
                                        </li>
                                        )}
                                    </ul>
                                    <button className='button'>
                                        Tovább a megrendeléshez
                                    </button>
                                </div>
                                :
                                <></>
                            }
                        </li>)
                        )}
                    </ul>
                </nav>
            </div>  
        </header>                  
    )
}

export default Navigation; //exportálás App-ba