import {configureStore} from '@reduxjs/toolkit';
import phoneBrandsSlice from "./state/phoneBrandsSlice";

const store = configureStore({
    reducer: {
        phoneBrands: phoneBrandsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
