import {FC, useEffect, useState} from 'react';
import ProductDetails from "./ProductDetails.ts";

interface Props {
    productData: ProductDetails;
}

const ProductBox: FC<Props> = ({productData}) => {

    const [images] = useState<string[]>(productData.image.images);
    const [index, setIndex] = useState<number>(0);
    const [currentImage, setCurrentImage] = useState<string>(images[index]);

    const rightClickHandler = () =>{
        setIndex(prevState => (prevState + 1) % images.length);
    };

    const leftClickHandler = () =>{
        setIndex(prevState => (prevState - 1 + images.length) % images.length);
    };

    useEffect(() => {
        setCurrentImage(images[index]);
    }, [index, images, setCurrentImage]);

    return (
        <div className={"product-box"}>
            <div className="product-box-header">
                <img src={productData.image.folder + currentImage} alt=""/>
                <button className={"image-selector-button left"} onClick={leftClickHandler}>&larr;</button>
                <button className={"image-selector-button right"} onClick={rightClickHandler}>&rarr;</button>
            </div>
            <div className="product-box-body">
                <h3>{productData.title}</h3>
                <h4>{productData.subtitle}</h4>
            </div>
        </div>
    );
};

export default ProductBox;