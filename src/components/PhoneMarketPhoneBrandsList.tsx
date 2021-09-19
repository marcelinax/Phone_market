import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPhoneBrand} from "../state/phoneBrandsSlice";
import {RootState} from "../store";
import PhoneMarketPhoneBrandItem from "./PhoneMarketPhoneBrandItem";
import PhoneMarketPhoneBrandsListItem from "./PhoneMarketPhoneBrandsListItem";

const PhoneMarketPhoneBrandsList: React.FC = () => {

    const phoneBrandModels = useSelector((state: RootState) => state.phoneBrandModel.phoneBrandModel);
    const phoneBrands = useSelector((state: RootState) => state.phoneBrands.phoneBrands);
    const currentPhoneBrand = useSelector((state: RootState) => state.phoneBrands.currentPhoneBrand);
    const dispatch = useDispatch();


    const renderPhoneBrandModels = (): JSX.Element[] | JSX.Element => {
        if (phoneBrandModels)
            return phoneBrandModels.phones.map(phoneBrandModelPhone => (
                <PhoneMarketPhoneBrandsListItem brand={phoneBrandModelPhone.brand} image={phoneBrandModelPhone.image}
                                                phoneName={phoneBrandModelPhone.phone_name}/>
            ));
        else return (phoneBrands.map(phoneBrand => (
            <PhoneMarketPhoneBrandItem brand={phoneBrand.brand_name}
                                       onClick={() => dispatch(setCurrentPhoneBrand(phoneBrand))}/>
        )));
    };


    return (
        <div className={'phone-market-phone-brands-list'}>
            <h4>Phone Market
                - {currentPhoneBrand ? currentPhoneBrand.brand_name + ' / ' + currentPhoneBrand.device_count : 'All'}</h4>
            <div className={'phone-market-phone-brands-list-box'}>
                {renderPhoneBrandModels()}
            </div>
        </div>
    );
};

export default PhoneMarketPhoneBrandsList;