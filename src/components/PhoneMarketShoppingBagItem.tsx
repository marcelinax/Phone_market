import React from 'react';
import {useDispatch} from "react-redux";

interface Props {
    brand: string;
    phoneName: string;
    price: number;
    amount: number;
    thumbnail: string;
    deleteItem: () => void;
    addMoreToShoppingBag: () => void;
    removeOneFromShoppingBag: () => void;

}

const PhoneMarketShoppingBagItem: React.FC<Props> = ({
                                                         phoneName,
                                                         price,
                                                         brand,
                                                         amount,
                                                         thumbnail,
                                                         deleteItem,
                                                         addMoreToShoppingBag, removeOneFromShoppingBag
                                                     }) => {

    const dispatch = useDispatch();


    return (
        <div className={'phone-market-shopping-bag-item'}>
            <i className="bx bx-x delete-btn" onClick={deleteItem}/>
            <div className={'phone-market-shopping-bag-item-photo'}
                 style={{backgroundImage: `url(${thumbnail})`}}/>
            <div className={'phone-market-shopping-bag-item-info'}>
                <div className={'phone-market-shopping-bag-item-info-top'}>
                    <p>{phoneName}</p>
                    <p>{brand}</p>
                </div>
                <div className={'phone-market-shopping-bag-item-info-bottom'}>
                    <button onClick={removeOneFromShoppingBag}><i className="bx bx-minus"/></button>
                    <button>{amount}x ${price}</button>
                    <button onClick={addMoreToShoppingBag}><i className="bx bx-plus"/></button>
                </div>
            </div>

        </div>
    );
};

export default PhoneMarketShoppingBagItem;