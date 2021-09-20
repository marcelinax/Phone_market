import React from 'react';
import PhoneMarketNavigation from "./PhoneMarketNavigation";
import PhoneMarketPhoneBrandsList from "./PhoneMarketPhoneBrandsList";

const PhoneMarket: React.FC = () => {


    return (
        <div className={'phone-market'}>
            <PhoneMarketNavigation/>
            <PhoneMarketPhoneBrandsList/>

        </div>
    );
};

export default PhoneMarket;