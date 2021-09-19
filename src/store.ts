import {configureStore} from '@reduxjs/toolkit';
import phoneBrandsSlice from "./state/phoneBrandsSlice";

export default configureStore({
    reducer: {
        phoneBrands: phoneBrandsSlice
    },
});