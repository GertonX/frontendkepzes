import './style.css';
import ProductGroup from '../../components/ProductGroup';
import Me from '../../components/Me';
import Cart from '../../components/Cart';
import { useState } from 'react';
import { getProductsFromSession } from '../../services/api';


function Home({ addProductToCart , cart, increaseQuantityOfProductInCart, decreaseQuantityOfProductInCart }) {
  /*
  JS DATA TYPES: string, number, boolean, array, object, undefined, null, bigInt
  */
  const name = "Nemeth Gergo";
  let age = 21;
  let myHobbies = ['playing video games','hiking','going out with friends','working out']; //lista

  const favoriteMusic = [
    'Three Days Grace - Animal i have become',
    'Falling In Reverse - Voices In My Head',
    'Three Days Grace - Riot'
  ];

  const mySelf = {
    firstName: 'Gergo',   //string
    lastName: 'Nemeth',
    age: 21, //szám
    married: false, //boolean
    hobbies: ['playing games','running','swimming'], //lista
    myPartnerName: undefined, //nincs definiálva
    numberOfChildren: null, //nincs értéke
    myMusic: favoriteMusic
  };

  const appLogoClass = 'App-logo';

    return(
        <div className='home-screen'>
            <ProductGroup products={getProductsFromSession()} addProductToCart={addProductToCart} />
            <Cart 
            increaseQuantity = {increaseQuantityOfProductInCart}
            decreaseQuantity = {decreaseQuantityOfProductInCart}
            />
            {/*
            <Me myData={mySelf} />
            <header className="App-header">
                <p>
                { name }
                </p>
                
                { myHobbies.map((hobby) => //annyi elemmel tér vissza amennyi a tömb darabszáma
                <p key={hobby}>
                    { hobby }
                </p>
                )}

                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
            */}
        </div>
    )

}

export default Home;