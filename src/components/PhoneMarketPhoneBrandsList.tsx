import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";

const PhoneMarketPhoneBrandsList: React.FC = () => {

    const phoneBrandModels = useSelector((state: RootState) => state.phoneBrandModel.phoneBrandModel);


    return (
        <div className={'phone-market-phone-brands-list'}>
            <h4>Phone Market - brand</h4>
            <div className={'phone-market-phone-brands-list-box'}>

            </div>
        </div>
    );
};

export default PhoneMarketPhoneBrandsList;