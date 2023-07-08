// use local storage to manage cart data
const addToDb = P_Code => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[P_Code];
    if (!quantity) {
        shoppingCart[P_Code] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[P_Code] = newQuantity;
    }
    localStorage.setItem('electroAmbition-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = P_Code => {
    const shoppingCart = getShoppingCart();
    if (P_Code in shoppingCart) {
        delete shoppingCart[P_Code];
        localStorage.setItem('electroAmbition-cart', JSON.stringify(shoppingCart));
    }
}

const updateDb = (P_Code, Q) => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[P_Code];
    if (!quantity) {
        shoppingCart[P_Code] = Q;
    }
    else if (Q <= 0) {
        removeFromDb(P_Code)
    }
    else {
        const newQuantity = Q;
        shoppingCart[P_Code] = newQuantity;
    }
    localStorage.setItem('electroAmbition-cart', JSON.stringify(shoppingCart));
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('electroAmbition-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('electroAmbition-cart');
}

export {
    addToDb,
    updateDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
