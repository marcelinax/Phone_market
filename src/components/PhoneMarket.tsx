import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import PhoneMarketNavigation from "./PhoneMarketNavigation";
import PhoneMarketPhoneBrandsList from "./PhoneMarketPhoneBrandsList";
import PhoneMarketShoppingBag from "./PhoneMarketShoppingBag";
import PhoneMarketSpinnerLoading from "./PhoneMarketSpinnerLoading";


const PhoneMarket: React.FC = () => {


    const [showShoppingBag, setShowShoppingBag] = useState<boolean>(false);
    const phoneBrandsLoading = useSelector((state: RootState) => state.phoneBrands.loading);

    return (

        <div className={'phone-market'}>
            <i className="bx bx-shopping-bag shopping-bag-btn" onClick={() => setShowShoppingBag(true)}/>
            <PhoneMarketShoppingBag setShowShoppingBag={() => setShowShoppingBag(false)} isShown={showShoppingBag}/>
            <PhoneMarketNavigation/>
            <PhoneMarketPhoneBrandsList/>
            {phoneBrandsLoading ? <PhoneMarketSpinnerLoading/> : <></>}

        </div>
    );
};

export default PhoneMarket;