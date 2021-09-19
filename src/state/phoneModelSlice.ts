import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PhoneModel from "../types/PhoneModel";

interface PhoneModelState {
    phoneModel: PhoneModel | null;
}

const initialState: PhoneModelState = {
    phoneModel: null
};

export const phoneModelSlice = createSlice({
    name: 'phoneModel',
    initialState: initialState,
    reducers: {
        setPhoneModel: (state, action: PayloadAction<PhoneModel>) => {
            state.phoneModel = action.payload;
        }
    }
});

export const {setPhoneModel} = phoneModelSlice.actions;
export default phoneModelSlice.reducer;