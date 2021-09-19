import {configureStore} from '@reduxjs/toolkit';
import phoneBrandModelsSlice from "./state/phoneBrandModelsSlice";
import phoneBrandsSlice from "./state/phoneBrandsSlice";
import phoneModelSlice from "./state/phoneModelSlice";

const store = configureStore({
    reducer: {
        phoneBrands: phoneBrandsSlice,
        phoneBrandModel: phoneBrandModelsSlice,
        phoneModel: phoneModelSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
