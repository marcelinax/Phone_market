import React from 'react';

const PhoneMarketShoppingBagItem: React.FC = () => {
    return (
        <div className={'phone-market-shopping-bag-item'}>
            <i className="bx bx-x delete-btn"/>
            <div className={'phone-market-shopping-bag-item-photo'}
                 style={{backgroundImage: `url(https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2021/4/pr_2021_4_20_21_0_51_187_00.jpg)`}}/>
            <div className={'phone-market-shopping-bag-item-info'}>
                <div className={'phone-market-shopping-bag-item-info-top'}>
                    <p>iPhone 13 mini</p>
                    <p>Apple</p>
                </div>
                <div className={'phone-market-shopping-bag-item-info-bottom'}>
                    <button><i className="bx bx-minus"/></button>
                    <button>1x $600</button>
                    <button><i className="bx bx-plus"/></button>
                </div>
            </div>

        </div>
    );
};

export default PhoneMarketShoppingBagItem;