import React from 'react';

interface Props {
    brand: string;
    phoneName: string;
    image: string;
    onClick: () => void;
}

const getRandomPrice = (): number => {
    const min: number = Math.ceil(5);
    const max: number = Math.floor(1000);
    return Math.floor(Math.random() * (max - min + 1)) + min;

};

const PhoneMarketPhoneBrandsListItem: React.FC<Props> = ({brand, phoneName, image, onClick}) => {
    return (
        <div className={'phone-market-phone-brands-list-item'} onClick={onClick}>
            <div className={'phone-market-phone-brands-list-item-bg'}
                 style={{backgroundImage: `url(${image})`}}>
            </div>
            <div className={'phone-market-phone-brands-list-item-bottom'}>
                <p className={'phone-name'}>{phoneName}</p>
                <p className={'phone-brand'}>{brand}</p>
                <p className={'phone-price'}>${getRandomPrice()}</p>

            </div>

        </div>
    );
};

export default PhoneMarketPhoneBrandsListItem;