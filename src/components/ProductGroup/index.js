import { getProductsFromSession } from '../../services/api';
import './style.css';
import { useState } from 'react';

function ProductGroup( { addProductToCart}) {

    const [categories, setCategories]  = useState([]);

    const loadCategories = () => {
        fetch('/api/product-categories/index.json')
        .then(response => response.json())
        .then(data => categories.length < 1 &&  setCategories(data.categories));
    };

    loadCategories();

    const getProductByCategoryId = (categoryId) => {
        return getProductsFromSession().filter((product) => product.categoryId === categoryId);
    };

    return(
    <section id="product-group">
        <div className='container'>
            <h2 className='headline'>
                PC alkatrészek
            </h2>

            <div className='product-groups'>
            {
                categories.map(category =>
                <div key={category.id} className='product-group'>
                    <div className='product-group-bar' style={{backgroundImage: 'url(/img/desert-wallpaper.jpg)'}}>
                        <h3 className='product-group-name'>
                            {category.label}
                        </h3>
                        <button className='product-group-toggle-button'>

                        </button>
                    </div>

                    <div className='product-groups-products'>
                    {
                        getProductByCategoryId(category.id).map((product) =>
                        <div key={product.id} className='product-group-product'>
                            <h4 className='product-name'>
                                {product.name}   
                            </h4>

                            <div className='product-image' style={  {backgroundImage: "url(" + product.imgUrl + ")"} }>
                                
                            </div>

                            <p className='product-price'>
                                {product.price} Ft
                            </p>
                            <button className='button' onClick={ () => addProductToCart(product.id) }>
                                Kosárba rakom 
                            </button>
                        </div>
                    )}                      
                    </div>
                </div>
                )
            }
            </div>
        </div>
    </section>
    )
}

export default ProductGroup;