// for add item to cart
export const addCart = (item: any) => {
    return {
        type: 'ADD_CART',
        payload: item,
    };
}

// for remove item from cart
export const removeCart = (item: any) => {
    return {
        type: 'REMOVE_CART',
        payload: item,
    };
}