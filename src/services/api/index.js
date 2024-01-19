export const getProductsFromSession = () => {
    return JSON.parse(window.sessionStorage.getItem('products'));
};

export const getCartItemsToRender = 
    (cart = JSON.parse(window.sessionStorage.getItem('cart')),                                    
    products = getProductsFromSession()) => {
    let cartItemsToRender = [];
    const cartItems = cart ? cart.cartItems : [];
    console.log('GET CART ITEMS:', cartItems, products);
    products = products ?? [];

    if(cartItems?.length) {
        cartItemsToRender = cartItems.map(cartItem => {
            const productInCart = products.find(product => product.id === cartItem.id);

            return {
                ...cartItem, 
                name: productInCart.name,
                price: productInCart.price,
                imgUrl: productInCart.imgUrl,
            };
        }); 
    }

    return cartItemsToRender;
};