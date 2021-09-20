import React from 'react';
import getRandomPrice from "../utils/getRandomPrice";

interface Props {
    brand: string;
    phone_name: string;
    thumbnail: string;
    phone_images: string[];
    release_date: string;
    dimension: string;
    os: string;
    storage: string;
    specifications: {
        title: string,
        specs: {
            key: string,
            val: string[]
        }[];
    }[];
    onClick: () => void;
    addToShoppingBag: () => void;

}


const PhoneMarketPhoneModel: React.FC<Props> = ({
                                                    phone_images,
                                                    phone_name,
                                                    os,
                                                    release_date,
                                                    specifications,
                                                    dimension,
                                                    storage,
                                                    thumbnail,
                                                    brand,
                                                    children, onClick, addToShoppingBag
                                                }) => {


    const renderSpecifications = (): JSX.Element[] => {
        return specifications.map(specification => (
            <div className={'specification-box'}>
                <h4>{specification.title}</h4>
                {specification.specs.map(spec => (
                    <div className={'specification-box-row'}>
                        <p className={'specification-name'}>{spec.key}:</p>
                        <p className={'specification-value'}>{spec.val}</p>
                    </div>
                ))}

            </div>
        ));
    };

    return (
        <div className={'phone-market-phone-model'}>
            <i className="bx bx-x close-btn" onClick={onClick}/>
            <button onClick={addToShoppingBag}>Buy <i className="bx bxs-cart-alt"></i></button>
            <div className={'phone-market-phone-model-box'}>
                <div className={'phone-market-phone-model-box-bg'}
                     style={{backgroundImage: `url(${phone_images[0]})`}}/>
                <div className={'phone-market-phone-model-box-info'}>
                    <div className={'phone-market-phone-model-box-info-model-name'}>
                        <h1>{phone_name}</h1>
                        <h5>{brand}</h5>
                    </div>
                    <h1>${getRandomPrice()}</h1>
                    <div className={'phone-market-phone-model-box-info-model-main-info'}>
                        <p><strong>Release date:</strong> {release_date}</p>
                        <p><strong>Dimension:</strong> {dimension}</p>
                        <p><strong>Os:</strong> {os}</p>
                        <p><strong>Storage:</strong> {storage}</p>
                    </div>
                    <div className={'phone-market-phone-model-box-info-model-more-info'}>
                        {renderSpecifications()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneMarketPhoneModel;