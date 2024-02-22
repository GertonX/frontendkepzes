export const getProductsFromSession = () => {
    return JSON.parse(window.sessionStorage.getItem('products'));
};

export const getCartFromSession = () => {
    return JSON.parse(window.sessionStorage.getItem('cart'));
};

export const getCartItemsToRender =  (cart = getCartFromSession(), products = getProductsFromSession()) => {
    let cartItemsToRender = [];
    const cartItems = cart ? cart.cartItems : [];
    console.log('GET CART ITEMS:', cartItems, products);
    products = products ?? [];

    if(cartItems?.length) {
        cartItemsToRender = cartItems.map(cartItem => {
            const product = products.find(product => product.id === cartItem.id);

            return {
                ...product,
                ...cartItem
            };
        }); 
    }

    return cartItemsToRender;
};