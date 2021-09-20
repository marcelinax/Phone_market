import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PhoneModel from "../types/PhoneModel";
import getRandomPrice from "../utils/getRandomPrice";


interface ShoppingBagState {
    shoppingBag: PhoneModel[];
    shoppingBagProductAmounts: number[];
    shoppingBagPriceOfFirstProducts: number[];
}

const saveShoppingBagInSessionStorage = (state: PhoneModel[]): void => {
    sessionStorage.setItem('shoppingBag', JSON.stringify(state));
};
const saveShoppingBagProductAmountsInSessionStorage = (state: number[]): void => {
    sessionStorage.setItem('shoppingBagProductAmounts', JSON.stringify(state));
};

const loadShoppingBagFromSessionStorage = (): PhoneModel[] => {

    return JSON.parse(sessionStorage.getItem('shoppingBag') || '[]');
};
const loadShoppingBagProductAmountsFromSessionStorage = (): number[] => {

    return JSON.parse(sessionStorage.getItem('shoppingBagProductAmounts') || '[]');
};

const saveShoppingBagPriceOfFirstProductsInSessionStorage = (state: number[]): void => {
    sessionStorage.setItem('shoppingBagPriceOfFirstProducts', JSON.stringify(state));
};

const loadShoppingBagPriceOfFirstProductsFromSessionStorage = (): number[] => {

    return JSON.parse(sessionStorage.getItem('shoppingBagPriceOfFirstProducts') || '[]');
};

const initialState: ShoppingBagState = {
    shoppingBag: loadShoppingBagFromSessionStorage(),
    shoppingBagProductAmounts: loadShoppingBagProductAmountsFromSessionStorage(),
    shoppingBagPriceOfFirstProducts: loadShoppingBagPriceOfFirstProductsFromSessionStorage()
};


export const shoppingBagSlice = createSlice({
    name: 'shoppingBag',
    initialState: initialState,
    reducers: {
        addProductToShoppingBag: (state, action: PayloadAction<PhoneModel>) => {
            const {phone_name} = action.payload;
            const productIndex = state.shoppingBag.map(item => item.phone_name).indexOf(phone_name);
            if (state.shoppingBag.map(item => item.phone_name).includes(phone_name)) {
                const shoppingBagItemIndex = state.shoppingBag.map(item => item.phone_name).indexOf(phone_name);
                state.shoppingBagProductAmounts[shoppingBagItemIndex] = state.shoppingBagProductAmounts[shoppingBagItemIndex] + 1;
                state.shoppingBagProductAmounts = [...state.shoppingBagProductAmounts];
            } else {
                state.shoppingBag = [...state.shoppingBag, action.payload];
                state.shoppingBagProductAmounts = [...state.shoppingBagProductAmounts, 1];
                state.shoppingBagPriceOfFirstProducts = [...state.shoppingBagPriceOfFirstProducts, getRandomPrice()];
                saveShoppingBagPriceOfFirstProductsInSessionStorage(state.shoppingBagPriceOfFirstProducts);
            }
            saveShoppingBagProductAmountsInSessionStorage(state.shoppingBagProductAmounts);
            saveShoppingBagInSessionStorage(state.shoppingBag);
        },
        deleteProductFromShoppingBag: (state, action: PayloadAction<PhoneModel>) => {
            const {phone_name} = action.payload;
            const deleteStartIndex = state.shoppingBag.map(item => item.phone_name).indexOf(phone_name);
            state.shoppingBag.splice(deleteStartIndex, 1);
            state.shoppingBagProductAmounts.splice(deleteStartIndex, 1);
            state.shoppingBag = [...state.shoppingBag];
            state.shoppingBagProductAmounts = [...state.shoppingBagProductAmounts];
            saveShoppingBagProductAmountsInSessionStorage(state.shoppingBagProductAmounts);
            saveShoppingBagInSessionStorage(state.shoppingBag);

        },
        deleteOneProductFromShoppingBag: (state, action: PayloadAction<PhoneModel>) => {
            const {phone_name} = action.payload;
            const deleteStartIndex = state.shoppingBag.map(item => item.phone_name).indexOf(phone_name);
            if (state.shoppingBagProductAmounts[deleteStartIndex] < 2) {
                state.shoppingBag.splice(deleteStartIndex, 1);
                state.shoppingBag = [...state.shoppingBag];
                state.shoppingBagProductAmounts.splice(deleteStartIndex, 1);

                saveShoppingBagInSessionStorage(state.shoppingBag);
            } else {
                state.shoppingBagProductAmounts[deleteStartIndex] = state.shoppingBagProductAmounts[deleteStartIndex] - 1;

            }
            state.shoppingBagProductAmounts = [...state.shoppingBagProductAmounts];
            saveShoppingBagProductAmountsInSessionStorage(state.shoppingBagProductAmounts);
        }
    }
});

export const {
    addProductToShoppingBag,
    deleteProductFromShoppingBag,
    deleteOneProductFromShoppingBag
} = shoppingBagSlice.actions;
export default shoppingBagSlice.reducer;