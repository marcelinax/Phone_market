import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PhoneBrand from "../types/PhoneBrand";

interface PhoneBrandsState {
    phoneBrands: PhoneBrand[];
}


const initialState: PhoneBrandsState = {
    phoneBrands: []
};

export const phoneBrandsSlice = createSlice({
    name: 'phoneBrands',
    initialState: initialState,
    reducers: {
        setPhoneBrands: (state, action: PayloadAction<PhoneBrand[]>) => {
            state.phoneBrands = action.payload;
        }
    }
});

export const {setPhoneBrands} = phoneBrandsSlice.actions;
export default phoneBrandsSlice.reducer;
