import React from 'react';


interface Props {
    brand: string;
    onClick: () => void;
}

const PhoneMarketPhoneBrandItem: React.FC<Props> = ({brand, onClick}) => {


    return (
        <div className={'phone-market-phone-brand-item'} onClick={onClick}>
            <div className={'phone-market-phone-brand-item-bg'}>
                <div className={'phone-market-phone-brand-item-bg-brand-box'}>
                    <p>{brand}</p>
                </div>
            </div>
        </div>
    );
};

export default PhoneMarketPhoneBrandItem;