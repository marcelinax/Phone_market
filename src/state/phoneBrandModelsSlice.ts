import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PhoneBrandModel from "../types/PhoneBrandModel";

interface PhoneBrandModelsSlice {
    phoneBrandModel: PhoneBrandModel | null;
}

const initialState: PhoneBrandModelsSlice = {
    phoneBrandModel: null
};

export const phoneBrandModelsSlice = createSlice({
    name: 'phoneBrandModel',
    initialState: initialState,
    reducers: {
        setPhoneBrandModels: (state, action: PayloadAction<PhoneBrandModel>) => {
            state.phoneBrandModel = action.payload;
        }
    }
});

export const {setPhoneBrandModels} = phoneBrandModelsSlice.actions;
export default phoneBrandModelsSlice.reducer;