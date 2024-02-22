import './style.css';
import Cart from '../../../../components/Cart';
import { getCartItemsToRender } from '../../../../services/api';

function Summary({setCurrentStep}) {

    const getCartTotalCostValue = () => {
        let totalCostValue = 0;
        const cartItems = getCartItemsToRender();

        cartItems.forEach(cartItems => {
            totalCostValue += cartItems.quantity * cartItems.price;
        });

        return totalCostValue;
    };

    const getCartTotalQuantity = () => {
        let totalCostQuantity = 0;
        const cartItems = getCartItemsToRender();

        cartItems.forEach(cartItems => {
            totalCostQuantity += cartItems.quantity;
        });

        return totalCostQuantity;
    };

    return (
        <article className='step-content summary-form'>
                <h2 className='summary-title'>
                    Összegzés
                </h2>

                <div className='summary-cart'>
                    <ul className='cart-list'>
                        <div className='cart-labels'>
                            <span className='cart-label-name'>Termék neve</span>

                            <span className='cart-label-quantity'>Darabszám</span>

                            <span className='cart-label-price'>Ára</span>
                        </div>
                        
                        {getCartItemsToRender().map((item) => 
                            <li key={item.id}>

                                {/*<img src={item.imgUrl}/>*/}

                                <span className='cart-item-name'>
                                                    
                                    {item.name}

                                </span>

                                <span className='cart-item-quantity'>
                                    {item.quantity} {item.unit}
                                </span>

                                <span className='cart-item-price'>
                                    {item.price} {item.currency}
                                </span>
                            </li>
                            )}
                            <li className='cart-total-cost'>
                                <span className='cart-total-cost-label'>
                                    Összesen:
                                </span>

                                <span className='cart-total-cost-quantity'>
                                    { getCartTotalQuantity() } db
                                </span>

                                <span className='cart-total-cost-value'>
                                    { getCartTotalCostValue() } Ft 
                                </span>
                            </li>
                    </ul>

                    <div className='form-group'>
                        <button className='button' onClick={ () => {setCurrentStep('shipping')} }>
                            Vissza
                        </button>

                        <button className='button' onClick={ () => {setCurrentStep('send-order')} }>
                            Tovább
                        </button>
                    </div>

                </div>
        </article>
    )
}

export default Summary;