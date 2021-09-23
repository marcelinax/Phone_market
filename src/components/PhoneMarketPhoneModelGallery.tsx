import React, {useRef, useState} from 'react';

interface Props {
    images: string[];
}

const PhoneMarketPhoneModelGallery: React.FC<Props> = ({images}) => {

    const [currentImage, setCurrentImage] = useState<string>(images[0]);
    const currentImageRef = useRef<HTMLDivElement | null>(null);


    const renderButtons = (): JSX.Element[] => {
        const buttons: JSX.Element[] = [];
        for (let i = 0; i < images.length; i++) {
            buttons.push(<button key={i}
                                 className={`phone-market-phone-model-gallery-box-buttons-button ${currentImage === images[i] ? 'gallery-box-buttons-button--active' : ''}`}
                                 onClick={() => changeImage(i)}/>);
        }
        return buttons;
    };

    const changeImage = (index: number): void => {
        if (currentImageRef !== null && currentImageRef.current !== null) {
            currentImageRef.current.classList.remove('phone-market-phone-model-gallery-box-img-show');
            setCurrentImage(images[index]);
            currentImageRef.current.classList.add('phone-market-phone-model-gallery-box-img-show');
        }


    };

    return (
        <div className={'phone-market-phone-model-gallery'}>
            <div className={'phone-market-phone-model-gallery-box'}>
                <div
                    className={'phone-market-phone-model-gallery-box-img phone-market-phone-model-gallery-box-img-show'}
                    style={{backgroundImage: `url(${currentImage})`}} ref={currentImageRef}/>
                <div className={'phone-market-phone-model-gallery-box-buttons'}>
                    {renderButtons()}
                </div>
            </div>

        </div>
    );
};

export default PhoneMarketPhoneModelGallery;