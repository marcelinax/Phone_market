import React from 'react';
import getRandomPrice from "../utils/getRandomPrice";

interface Props {
    brand: string;
    phoneName: string;
    image: string;
    onClick: () => void;
    addToShoppingBag: (event: React.MouseEvent<HTMLElement>) => void;
}


const PhoneMarketPhoneBrandsListItem: React.FC<Props> = ({brand, phoneName, image, onClick, addToShoppingBag}) => {
    return (
        <div className={'phone-market-phone-brands-list-item'}>
            <div className={'phone-market-phone-brands-list-item-bg'} onClick={onClick}
                 style={{backgroundImage: `url(${image})`}}>
            </div>
            <div className={'phone-market-phone-brands-list-item-bottom'}>
                <p className={'phone-name'}>{phoneName}</p>
                <p className={'phone-brand'}>{brand}</p>
                <p className={'phone-price'}>${getRandomPrice()}</p>
                <i className="bx bx-cart-alt bx-flip-horizontal" onClick={addToShoppingBag}></i>
            </div>

        </div>
    );
};

export default PhoneMarketPhoneBrandsListItem;