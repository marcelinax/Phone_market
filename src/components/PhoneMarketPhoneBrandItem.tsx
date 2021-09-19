import React from 'react';

interface Props {
    brand: string;
}

const PhoneMarketPhoneBrandItem: React.FC<Props> = ({brand}) => {
    return (
        <div className={'phone-market-phone-brand-item'}>
            <div className={'phone-market-phone-brand-item-bg'}>
                <div className={'phone-market-phone-brand-item-bg-brand-box'}>
                    <p>{brand}</p>
                </div>
            </div>
        </div>
    );
};

export default PhoneMarketPhoneBrandItem;