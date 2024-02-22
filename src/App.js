import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './screens/Home';
import Products from './screens/Products';
import Contacts from './screens/Contacts'; 
import Game from './screens/Game'; 
import Articles from './screens/Articles';
import Article from './screens/Article';
import { useEffect, useState } from 'react';
import { getCartFromSession } from './services/api';
import Checkout from './screens/Checkout';

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
    let newCart = getCartFromSession();

    if (!newCart) {
      newCart = { cartItems: [] };
    }

    const productInCart = newCart.cartItems.find(cartItem => cartItem.id === productId);
    

    if(productInCart) 
    {
      productInCart.quantity = productInCart.quantity + 1 ;
    }

    else 
    {
      const newProduct = {id: productId, quantity: 1};
      newCart = {...newCart, cartItems: [...newCart.cartItems, newProduct] };
    }

    saveCartToSession(newCart);
    setCart(newCart);
  };
    
  //remove product to cart identified by product 'id' property
  const removeProductToCart = (productId) => {
    
  };

  //increase product quantity in cart identified by product 'id' property
  const increaseQuantityOfProductInCart = (productId) => {
    const newCart = getCartFromSession();
    const productInCart = newCart.cartItems.find(cartItems => cartItems.id === productId);

    if(productInCart) {

        productInCart.quantity = productInCart.quantity + 1;

    }
  
    saveCartToSession(newCart);
    setCart(newCart);
  };

  //decrease product quantity in identified by product 'id' property
  const decreaseQuantityOfProductInCart = (productId) => {
    const newCart = getCartFromSession();
    const productInCart = newCart.cartItems.find(cartItems => cartItems.id === productId);

    if(productInCart) 
    {

      if (productInCart.quantity > 1 ) {

          productInCart.quantity = productInCart.quantity - 1;
          
      }
      
      else {
        removeProductToCart();
      }

    }

    saveCartToSession(newCart);
    setCart(newCart);
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
            <Route path={'articles'} element={<Articles />}/>
            <Route path={'articles/:id'} element={<Article />}/>
            <Route path={'checkout'} element={<Checkout />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
