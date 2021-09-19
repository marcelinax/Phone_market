import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PhoneBrand from "../types/PhoneBrand";

interface PhoneBrandsState {
    phoneBrands: PhoneBrand[];
    currentPhoneBrand: PhoneBrand | null;
}


const initialState: PhoneBrandsState = {
    phoneBrands: [],
    currentPhoneBrand: null,
};

export const phoneBrandsSlice = createSlice({
    name: 'phoneBrands',
    initialState: initialState,
    reducers: {
        setPhoneBrands: (state, action: PayloadAction<PhoneBrand[]>) => {
            state.phoneBrands = action.payload;
        },
        setCurrentPhoneBrand: (state, action: PayloadAction<PhoneBrand>) => {
            state.currentPhoneBrand = action.payload;
        }
    }
});

export const {setPhoneBrands, setCurrentPhoneBrand} = phoneBrandsSlice.actions;
export default phoneBrandsSlice.reducer;
