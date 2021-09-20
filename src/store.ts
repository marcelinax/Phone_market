import {configureStore} from '@reduxjs/toolkit';
import phoneBrandModelsSlice from "./state/phoneBrandModelsSlice";
import phoneBrandsSlice from "./state/phoneBrandsSlice";
import phoneModelSlice from "./state/phoneModelSlice";
import shoppingBagSlice from "./state/shoppingBagSlice";

const store = configureStore({
    reducer: {
        phoneBrands: phoneBrandsSlice,
        phoneBrandModel: phoneBrandModelsSlice,
        phoneModel: phoneModelSlice,
        shoppingBag: shoppingBagSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
