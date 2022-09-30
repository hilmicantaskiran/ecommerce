import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '[]') : [],
};

const handleCart = (state = initialState.cart, action: PayloadAction<any>) => {
    const item = action.payload;
    switch (action.type) {
        case 'ADD_CART':
            const existAdd = state.find((x: any) => x.id === item.id);
            if (existAdd) {
                return state.map((x: any) => x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x);
            } else {
                const item = action.payload;
                return [...state, { ...item, quantity: 1 }];
            }
            
        case 'REMOVE_CART':
            const existRemove = state.find((x: any) => x.id === item.id);
            if (existRemove.quantity === 1) {
                return state.filter((x: any) => x.id !== existRemove.id);
            } else {
                return state.map((x: any) => x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x);
            }

        default:
            return state;
    }
}

export default handleCart;
