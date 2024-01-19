import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './screens/Home';
import Products from './screens/Products';
import Contacts from './screens/Contacts'; 
import Game from './screens/Game'; 
import { useEffect, useState } from 'react';

function App() {
  // default cart object deffined on the top level
  const [cart, setCart] = useState({cartItems: [] });
  let [products, setProducts] = useState([]);

  const saveCartToSession = (cart) => {
    window.sessionStorage.setItem('cart', JSON.stringify(cart));
  };

  const saveProductsToSession = () => {
    window.sessionStorage.setItem('products', JSON.stringify(products));
  };

  //add product to cart identified by product 'id' property
  const addProductToCart = (productId) => {
    console.log("addProductToCart");
    const currentCart = {...cart};
    const product = {id: productId, quantity: 1};
    const newCart = {...currentCart, cartItems: [...currentCart.cartItems, product] };
    saveCartToSession(newCart);
    console.log(newCart);
    //setCart(newCart);
  };
    
  //remove product to cart identified by product 'id' property
  const removeProductToCart = (productId) => {
    
  };

  //increase product quantity in cart identified by product 'id' property
  const increaseQuantityOfProductInCart = (productId) => {
    const currentCart = {...cart};
    const product = currentCart.cartItems.find(cartItems => cartItems.id === productId);
    product.quantity = product.quantity + 1;
    setCart(currentCart);
  };

  //decrease product quantity in identified by product 'id' property
  const decreaseQuantityOfProductInCart = (productId) => {
    const currentCart = {...cart};
    const product = currentCart.cartItems.find(cartItems => cartItems.id === productId);
    if (product.quantity > 1 )
    {
      product.quantity = product.quantity - 1;
    }
    else if (product.quantity < 1) 
    {
      removeProductToCart();
    }
    setCart(currentCart);
  };

  const loadProducts = () => {
    fetch('/api/products/index.json')
      .then(response => response.json())
      .then(data => products.length < 1 &&  window.sessionStorage.setItem('products', JSON.stringify(data.products)));
  };

  loadProducts();

  useEffect(() => {
    saveProductsToSession();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element = { 
            <Home
            addProductToCart={addProductToCart} 
            increaseQuantityOfProductInCart={increaseQuantityOfProductInCart}
            decreaseQuantityOfProductInCart={decreaseQuantityOfProductInCart}
            />} />
            <Route path={'products'} element={<Products />}/>
            <Route path={'contacts'} element={<Contacts />}/>
            <Route path={'game'} element={<Game />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
