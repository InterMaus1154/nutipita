import {FC, useState} from 'react';
import ProductDetails from "./ProductDetails.ts";

interface Props {
    productData: ProductDetails;
}

const ProductBox: FC<Props> = ({productData}) => {

    const [images] = useState<string[]>(productData.image.images);
    const [currentImage, setCurrentImage] = useState<string>(images[0]);

    return (
        <div className={"product-box"}>
            <div className="product-box-header">
                <img src={productData.image.folder + currentImage} alt=""/>
                <button className={"image-selector-button left"}>&larr;</button>
                <button className={"image-selector-button right"}>&rarr;</button>
            </div>
            <div className="product-box-body">
                <h3>{productData.title}</h3>
                <h4>{productData.subtitle}</h4>
            </div>
        </div>
    );
};

export default ProductBox;