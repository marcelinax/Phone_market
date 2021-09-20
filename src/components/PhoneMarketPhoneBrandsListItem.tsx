import React from 'react';
import getRandomPrice from "../utils/getRandomPrice";

interface Props {
    brand: string;
    phoneName: string;
    image: string;
    onClick: () => void;
}


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
                <i className="bx bx-cart-alt bx-flip-horizontal"></i>
            </div>

        </div>
    );
};

export default PhoneMarketPhoneBrandsListItem;