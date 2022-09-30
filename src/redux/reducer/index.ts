import handleCart from './handleCart';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducers = combineReducers({
    handleCart,
} as any);

export default rootReducers;

