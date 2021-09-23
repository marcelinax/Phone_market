import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PhoneModel from "../types/PhoneModel";

interface PhoneModelState {
    phoneModel: PhoneModel | null;
    phoneSlug: string;
    loading: boolean;
}

const initialState: PhoneModelState = {
    phoneModel: null,
    phoneSlug: '',
    loading: true

};

export const phoneModelSlice = createSlice({
    name: 'phoneModel',
    initialState: initialState,
    reducers: {
        setPhoneModel: (state, action: PayloadAction<PhoneModel | null>) => {
            state.phoneModel = action.payload;
        },
        setPhoneSlug: (state, action: PayloadAction<string>) => {
            state.phoneSlug = action.payload;
        }, setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    }
});

export const {setPhoneModel, setPhoneSlug, setLoading} = phoneModelSlice.actions;
export default phoneModelSlice.reducer;