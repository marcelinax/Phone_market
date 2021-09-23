import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PhoneBrandModel from "../types/PhoneBrandModel";

interface PhoneBrandModelsSlice {
    phoneBrandModel: PhoneBrandModel | null;
    loading: boolean;
}

const initialState: PhoneBrandModelsSlice = {
    phoneBrandModel: null,
    loading: true
};

export const phoneBrandModelsSlice = createSlice({
    name: 'phoneBrandModel',
    initialState: initialState,
    reducers: {
        setPhoneBrandModels: (state, action: PayloadAction<PhoneBrandModel>) => {
            state.phoneBrandModel = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
});

export const {setPhoneBrandModels, setLoading} = phoneBrandModelsSlice.actions;
export default phoneBrandModelsSlice.reducer;