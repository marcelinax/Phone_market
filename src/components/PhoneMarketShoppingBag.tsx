import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addProductToShoppingBag,
    deleteOneProductFromShoppingBag,
    deleteProductFromShoppingBag
} from "../state/shoppingBagSlice";
import {RootState} from "../store";
import PhoneMarketShoppingBagItem from "./PhoneMarketShoppingBagItem";


interface Props {
    setShowShoppingBag: () => void;
    isShown: boolean;
}


const PhoneMarketShoppingBag: React.FC<Props> = ({setShowShoppingBag, isShown}) => {

    const shoppingBag = useSelector((state: RootState) => state.shoppingBag.shoppingBag);
    const shoppingBagProductAmounts = useSelector((state: RootState) => state.shoppingBag.shoppingBagProductAmounts);
    const shoppingBagPriceOfFirstProducts = useSelector((state: RootState) => state.shoppingBag.shoppingBagPriceOfFirstProducts);
    const dispatch = useDispatch();

    const renderShoppingBagItems = (): JSX.Element[] | JSX.Element => {
        return shoppingBag.map((item, index) => (
            <PhoneMarketShoppingBagItem brand={item.brand} phoneName={item.phone_name}
                                        price={shoppingBagPriceOfFirstProducts[index]}
                                        amount={shoppingBagProductAmounts[index]} thumbnail={item.thumbnail}
                                        deleteItem={() => dispatch(deleteProductFromShoppingBag(item))}
                                        addMoreToShoppingBag={() => dispatch(addProductToShoppingBag(item))}
                                        removeOneFromShoppingBag={() => dispatch(deleteOneProductFromShoppingBag(item))}
                                        totalAmount={shoppingBagProductAmounts[index] * shoppingBagPriceOfFirstProducts[index]}
            />
        ));
    };

    const getTotalAmount = (): number => {
        const totalAmountOfEachProduct: number[] = [];
        if (shoppingBag.length > 0) {
            shoppingBag.map((item, index) => (
                totalAmountOfEachProduct.push(shoppingBagProductAmounts[index] * shoppingBagPriceOfFirstProducts[index])
            ));
            return totalAmountOfEachProduct.reduce((acc, cur) => acc + cur);
        } else {
            return 0;
        }


    };


    return (
        <div className={isShown ? 'phone-market-shopping-bag' : 'phone-market-shopping-bag hide'}>
            <div className={isShown ? `phone-market-shopping-bag-box show` : `phone-market-shopping-bag-box`}>
                <i className="bx bx-x close-shopping-bag-btn" onClick={setShowShoppingBag}/>
                <div className={'phone-market-shopping-bag-box-list'}>
                    {renderShoppingBagItems()}
                </div>
                <div className={'phone-market-shopping-bag-box-order-summary'}>
                    <div className={'phone-market-shopping-bag-box-order-summary-top'}>
                        <h3>Total amount:</h3>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <div className={'phone-market-shopping-bag-box-order-summary-bottom'}>
                        <button>Submit your order</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PhoneMarketShoppingBag;