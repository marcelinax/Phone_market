import axios from "axios";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhoneMarket from "./components/PhoneMarket";
import {setPhoneBrandModels} from "./state/phoneBrandModelsSlice";
import {setPhoneBrands} from "./state/phoneBrandsSlice";
import {AppDispatch, RootState} from "./store";
import PhoneBrand from "./types/PhoneBrand";
import PhoneBrandModel from "./types/PhoneBrandModel";


function App() {

    const dispatch = useDispatch<AppDispatch>();
    const currentPhoneBrand = useSelector((state: RootState) => state.phoneBrands.currentPhoneBrand);

    const getPhoneBrands = (): void => {
        axios.get('https://api-mobilespecs.azharimm.site/v2/brands').then(res => dispatch(setPhoneBrands(res.data.data as PhoneBrand[])));
    };

    const getPhoneBrandModels = (): void => {
        if (currentPhoneBrand !== null)
            axios.get(`https://api-mobilespecs.azharimm.site/v2/brands/${currentPhoneBrand.brand_slug}`).then(res => dispatch(setPhoneBrandModels(res.data.data as PhoneBrandModel)));
    };

    useEffect(() => {
        getPhoneBrands();
    }, []);

    useEffect(() => {
        getPhoneBrandModels();
    }, [currentPhoneBrand]);

    return (
        <>
            <PhoneMarket/>
        </>
    );
}

export default App;
