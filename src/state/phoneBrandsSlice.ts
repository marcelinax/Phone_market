import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PhoneBrand from "../types/PhoneBrand";

interface PhoneBrandsState {
    phoneBrands: PhoneBrand[];
    currentPhoneBrand: PhoneBrand | null;
    loading: boolean;
}


const initialState: PhoneBrandsState = {
    phoneBrands: [],
    currentPhoneBrand: null,
    loading: true
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
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
});

export const {setPhoneBrands, setCurrentPhoneBrand, setLoading} = phoneBrandsSlice.actions;
export default phoneBrandsSlice.reducer;
