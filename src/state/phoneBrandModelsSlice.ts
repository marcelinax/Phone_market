import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PhoneBrandModel from "../types/PhoneBrandModel";

interface PhoneBrandModelsSlice {
    phoneBrandModel: PhoneBrandModel[];
}

const initialState: PhoneBrandModelsSlice = {
    phoneBrandModel: []
};

export const phoneBrandModelsSlice = createSlice({
    name: 'phoneBrandModel',
    initialState: initialState,
    reducers: {
        setPhoneBrandModels: (state, action: PayloadAction<PhoneBrandModel[]>) => {
            state.phoneBrandModel = action.payload;
        }
    }
});

export const {setPhoneBrandModels} = phoneBrandModelsSlice.actions;
export default phoneBrandModelsSlice.reducer;