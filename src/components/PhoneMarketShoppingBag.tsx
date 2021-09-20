import React from 'react';
import PhoneMarketShoppingBagItem from "./PhoneMarketShoppingBagItem";


interface Props {
    setShowShoppingBag: () => void;
}

const PhoneMarketShoppingBag: React.FC<Props> = ({setShowShoppingBag}) => {
    return (
        <div className={'phone-market-shopping-bag'}>
            <div className={'phone-market-shopping-bag-box'}>
                <i className="bx bx-x close-shopping-bag-btn" onClick={setShowShoppingBag}/>
                <div className={'phone-market-shopping-bag-box-list'}>
                    <PhoneMarketShoppingBagItem></PhoneMarketShoppingBagItem>
                    <PhoneMarketShoppingBagItem></PhoneMarketShoppingBagItem>
                </div>
            </div>

        </div>
    );
};

export default PhoneMarketShoppingBag;