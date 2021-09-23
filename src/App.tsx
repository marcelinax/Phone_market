import axios from "axios";
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhoneMarket from "./components/PhoneMarket";
import {setPhoneBrandModels} from "./state/phoneBrandModelsSlice";
import {setLoading, setPhoneBrands} from "./state/phoneBrandsSlice";
import {setPhoneModel} from "./state/phoneModelSlice";
import {AppDispatch, RootState} from "./store";
import PhoneBrand from "./types/PhoneBrand";
import PhoneBrandModel from "./types/PhoneBrandModel";
import PhoneModel from "./types/PhoneModel";


function App() {


    const dispatch = useDispatch<AppDispatch>();
    const currentPhoneBrand = useSelector((state: RootState) => state.phoneBrands.currentPhoneBrand);
    const phoneSlug = useSelector((state: RootState) => state.phoneModel.phoneSlug);


    const getPhoneBrands = (): void => {
        dispatch(setLoading(true));

        axios.get('https://api-mobilespecs.azharimm.site/v2/brands').then(res => {
            dispatch(setLoading(false));
            dispatch(setPhoneBrands(res.data.data as PhoneBrand[]));
        });
    };

    const getPhoneBrandModels = (): void => {
        dispatch(setLoading(true));
        if (currentPhoneBrand !== null)
            axios.get(`https://api-mobilespecs.azharimm.site/v2/brands/${currentPhoneBrand.brand_slug}`).then(res => {
                dispatch(setLoading(false));
                dispatch(setPhoneBrandModels(res.data.data as PhoneBrandModel));
            });
    };

    const getPhoneModel = (): void => {
        if (phoneSlug === '') dispatch(setLoading(false));
        else dispatch(setLoading(true));
        if (phoneSlug !== '')
            axios.get(`http://api-mobilespecs.azharimm.site/v2/${phoneSlug}`).then(res => {
                dispatch(setLoading(false));
                dispatch(setPhoneModel(res.data.data as PhoneModel));
            });
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


    return (
        <>
            <PhoneMarket/>

        </>
    );
}

export default App;
