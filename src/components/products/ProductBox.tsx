import {FC} from 'react';
import ProductDetails from "./ProductDetails.ts";

interface Props {
    productData: ProductDetails;
}

const ProductBox: FC<Props> = ({productData}) => {
    return (
        <div className={"product-box"}>
            <img src={productData.image.folder + productData.image.images[0]} alt=""/>
            <h3>{productData.title}</h3>
            <h4>{productData.subtitle}</h4>
        </div>
    );
};

export default ProductBox;