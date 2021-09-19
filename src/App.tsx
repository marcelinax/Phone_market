import axios from "axios";
import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import PhoneMarket from "./components/PhoneMarket";
import {setPhoneBrands} from "./state/phoneBrandsSlice";
import {AppDispatch} from "./store";
import PhoneBrand from "./types/PhoneBrand";


function App() {

    const dispatch = useDispatch<AppDispatch>();

    const getPhoneBrands = (): void => {
        axios.get('https://api-mobilespecs.azharimm.site/v2/brands').then(res => dispatch(setPhoneBrands(res.data.data as PhoneBrand[])));
    };

    useEffect(() => {
        getPhoneBrands();
    }, []);

    return (
        <>
            <PhoneMarket/>
        </>
    );
}

export default App;
