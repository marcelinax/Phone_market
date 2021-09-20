import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPhoneBrand} from "../state/phoneBrandsSlice";
import {setPhoneModel, setPhoneSlug} from "../state/phoneModelSlice";
import {RootState} from "../store";
import PhoneMarketPhoneBrandItem from "./PhoneMarketPhoneBrandItem";
import PhoneMarketPhoneBrandsListItem from "./PhoneMarketPhoneBrandsListItem";
import PhoneMarketPhoneModel from "./PhoneMarketPhoneModel";

const PhoneMarketPhoneBrandsList: React.FC = () => {

    const phoneBrandModels = useSelector((state: RootState) => state.phoneBrandModel.phoneBrandModel);
    const phoneBrands = useSelector((state: RootState) => state.phoneBrands.phoneBrands);
    const currentPhoneBrand = useSelector((state: RootState) => state.phoneBrands.currentPhoneBrand);
    const phoneModel = useSelector((state: RootState) => state.phoneModel.phoneModel);
    const dispatch = useDispatch();


    const renderPhoneBrandModels = (): JSX.Element[] | JSX.Element => {
        if (phoneBrandModels)
            return phoneBrandModels.phones.map(phoneBrandModelPhone => (
                <PhoneMarketPhoneBrandsListItem brand={phoneBrandModelPhone.brand} image={phoneBrandModelPhone.image}
                                                phoneName={phoneBrandModelPhone.phone_name}
                                                onClick={() => dispatch(setPhoneSlug(phoneBrandModelPhone.slug))}
                />
            ));
        else return (phoneBrands.map(phoneBrand => (
            <PhoneMarketPhoneBrandItem brand={phoneBrand.brand_name}
                                       onClick={() => dispatch(setCurrentPhoneBrand(phoneBrand))}/>
        )));
    };

    const renderPhoneModelModal = (): JSX.Element => {
        if (phoneModel !== null) {
            return <PhoneMarketPhoneModel brand={phoneModel.brand} phone_name={phoneModel.phone_name}
                                          thumbnail={phoneModel.thumbnail} phone_images={phoneModel.phone_images}
                                          release_date={phoneModel.release_date} dimension={phoneModel.dimension}
                                          os={phoneModel.os}
                                          storage={phoneModel.storage} specifications={phoneModel.specifications}
                                          onClick={() => {
                                              dispatch(setPhoneModel(null));
                                          }}/>;
        } else return <></>;
    };


    return (
        <div className={'phone-market-phone-brands-list'}>
            {renderPhoneModelModal()}
            <h4>Phone Market
                - {currentPhoneBrand ? currentPhoneBrand.brand_name + ' / ' + currentPhoneBrand.device_count : 'All'}</h4>
            <div className={'phone-market-phone-brands-list-box'}>
                {renderPhoneBrandModels()}
            </div>
        </div>
    );
};

export default PhoneMarketPhoneBrandsList;