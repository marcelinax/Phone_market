import axios from "axios";
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhoneMarket from "./components/PhoneMarket";
import PhoneMarketSpinnerLoading from "./components/PhoneMarketSpinnerLoading";
import {setPhoneBrandModels} from "./state/phoneBrandModelsSlice";
import {setPhoneBrands} from "./state/phoneBrandsSlice";
import {setPhoneModel} from "./state/phoneModelSlice";
import {AppDispatch, RootState} from "./store";
import PhoneBrand from "./types/PhoneBrand";
import PhoneBrandModel from "./types/PhoneBrandModel";
import PhoneModel from "./types/PhoneModel";


function App() {

    const [loading, setLoading] = useState<boolean>(true);

    const dispatch = useDispatch<AppDispatch>();
    const currentPhoneBrand = useSelector((state: RootState) => state.phoneBrands.currentPhoneBrand);
    const phoneSlug = useSelector((state: RootState) => state.phoneModel.phoneSlug);


    const getPhoneBrands = (): void => {
        axios.get('https://api-mobilespecs.azharimm.site/v2/brands').then(res => dispatch(setPhoneBrands(res.data.data as PhoneBrand[])));
    };

    const getPhoneBrandModels = (): void => {
        if (currentPhoneBrand !== null)
            axios.get(`https://api-mobilespecs.azharimm.site/v2/brands/${currentPhoneBrand.brand_slug}`).then(res => dispatch(setPhoneBrandModels(res.data.data as PhoneBrandModel)));
    };

    const getPhoneModel = (): void => {
        if (phoneSlug !== '')
            axios.get(`http://api-mobilespecs.azharimm.site/v2/${phoneSlug}`).then(res => dispatch(setPhoneModel(res.data.data as PhoneModel)));
    };


    useEffect(() => {
        getPhoneBrands();
    }, []);

    useEffect(() => {
        getPhoneBrandModels();
    }, [currentPhoneBrand]);

    useEffect(() => {
        getPhoneModel();
    }, [phoneSlug]);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {loading ? <PhoneMarketSpinnerLoading/> : <PhoneMarket/>}

        </>
    );
}

export default App;
