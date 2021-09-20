import React, {useState} from 'react';
import PhoneMarketNavigation from "./PhoneMarketNavigation";
import PhoneMarketPhoneBrandsList from "./PhoneMarketPhoneBrandsList";
import PhoneMarketShoppingBag from "./PhoneMarketShoppingBag";

const PhoneMarket: React.FC = () => {

    const [showShoppingBag, setShowShoppingBag] = useState<boolean>(false);


    return (
        <div className={'phone-market'}>
            <i className="bx bx-shopping-bag shopping-bag-btn" onClick={() => setShowShoppingBag(true)}/>
            {showShoppingBag ? <PhoneMarketShoppingBag setShowShoppingBag={() => setShowShoppingBag(false)}/> : <></>}
            <PhoneMarketNavigation/>
            <PhoneMarketPhoneBrandsList/>

        </div>
    );
};

export default PhoneMarket;