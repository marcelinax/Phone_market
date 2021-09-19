import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";

const PhoneMarketNavigation: React.FC = () => {

    const phoneBrands = useSelector((state: RootState) => state.phoneBrands.phoneBrands);


    const renderPhoneBrands = (): JSX.Element[] => {
        return phoneBrands.map(phoneBrand => (
            <p key={phoneBrand.brand_id}>{phoneBrand.brand_name}</p>
        ));
    };

    return (
        <div className={'phone-market-navigation'}>
            <h1>Phone Market</h1>
            <div className={'phone-market-navigation-phone-brands-list'}>
                {renderPhoneBrands()}
            </div>
        </div>
    );
};

export default PhoneMarketNavigation;