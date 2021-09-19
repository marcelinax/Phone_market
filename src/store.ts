import {configureStore} from '@reduxjs/toolkit';
import phoneBrandModelsSlice from "./state/phoneBrandModelsSlice";
import phoneBrandsSlice from "./state/phoneBrandsSlice";

const store = configureStore({
    reducer: {
        phoneBrands: phoneBrandsSlice,
        phoneBrandModel: phoneBrandModelsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
