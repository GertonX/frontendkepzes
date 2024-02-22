import { getCartItemsToRender } from '../../services/api';
import './style.css';

function Cart( { increaseQuantity, decreaseQuantity } ) {
    return (
        <section id="cart">
            <div className='container'>
                <ul className='cart-items'>
                    {  getCartItemsToRender().map((product) => 
                    <li className='cart-item' key={product.id}>
                        <div className='cart-item-information'>
                            <img src={product.imgUrl}/>
                            <div className='cart-item-description'>
                                <h3 className='cart-item-name'>
                                    {product.name}
                                </h3>
                                <p className='cart-item-price'>
                                    {product.price} {product.currency}
                                </p>
                                <p className='cart-item-unit-price'>
                                    egységár
                                </p>
                            </div>
                        </div>

                        <div className='cart-item-quantity'>
                            <button className='button cart-item-change-quantity-button' onClick={() => decreaseQuantity(product.id) }>
                                {'<'}
                            </button>

                            <span className='cart-item-selected-quantity'>
                                {product.quantity} {product.unit}
                            </span>
                            <button className='button cart-item-change-quantity-button' onClick={() => increaseQuantity(product.id) }>
                                {'>'}
                            </button>
                        </div>


                        <div className='cart-item-cost'>
                            <p className='cart-item-final-price-label'>
                                Végösszeg
                            </p>
                            <h3 className='cart-item-final-price'>
                                {product.price * product.quantity } {product.currency}
                            </h3>
                        </div>
                    </li>
                    )}
                </ul>
            </div>
        </section>
    );
}

export default Cart;