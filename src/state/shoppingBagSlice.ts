import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import ShoppingBagProduct from "../types/ShoppingBagProduct";


interface ShoppingBagState {
    shoppingBag: ShoppingBagProduct[];
}

const saveShoppingBagInSessionStorage = (state: ShoppingBagProduct[]): void => {
    sessionStorage.setItem('shoppingBag', JSON.stringify(state));
};

const loadShoppingBagFromSessionStorage = (): ShoppingBagProduct[] => {
    return JSON.parse(localStorage.getItem('shoppingBag') || '[]');
};

const initialState: ShoppingBagState = {
    shoppingBag: loadShoppingBagFromSessionStorage()
};


export const shoppingBagSlice = createSlice({
    name: 'shoppingBag',
    initialState: initialState,
    reducers: {
        setShoppingBag: (state, action: PayloadAction<ShoppingBagProduct[]>) => {
            state.shoppingBag = action.payload;
            saveShoppingBagInSessionStorage(state.shoppingBag);
        }
    }
});

export const {setShoppingBag} = shoppingBagSlice.actions;
export default shoppingBagSlice.reducer;