import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addProductToShoppingBag,
    deleteOneProductFromShoppingBag,
    deleteProductFromShoppingBag
} from "../state/shoppingBagSlice";
import {RootState} from "../store";
import getRandomPrice from "../utils/getRandomPrice";
import PhoneMarketShoppingBagItem from "./PhoneMarketShoppingBagItem";


interface Props {
    setShowShoppingBag: () => void;
}


const PhoneMarketShoppingBag: React.FC<Props> = ({setShowShoppingBag}) => {

    const shoppingBag = useSelector((state: RootState) => state.shoppingBag.shoppingBag);
    const shoppingBagProductAmounts = useSelector((state: RootState) => state.shoppingBag.shoppingBagProductAmounts);
    const dispatch = useDispatch();

    const renderShoppingBagItems = (): JSX.Element[] => {
        return shoppingBag.map((item, index) => (
            <PhoneMarketShoppingBagItem brand={item.brand} phoneName={item.phone_name} price={getRandomPrice()}
                                        amount={shoppingBagProductAmounts[index]} thumbnail={item.thumbnail}
                                        deleteItem={() => dispatch(deleteProductFromShoppingBag(item))}
                                        addMoreToShoppingBag={() => dispatch(addProductToShoppingBag(item))}
                                        removeOneFromShoppingBag={() => dispatch(deleteOneProductFromShoppingBag(item))}/>
        ));
    };

    return (
        <div className={'phone-market-shopping-bag'}>
            <div className={'phone-market-shopping-bag-box'}>
                <i className="bx bx-x close-shopping-bag-btn" onClick={setShowShoppingBag}/>
                <div className={'phone-market-shopping-bag-box-list'}>
                    {renderShoppingBagItems()}
                </div>
            </div>

        </div>
    );
};

export default PhoneMarketShoppingBag;