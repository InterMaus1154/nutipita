import {FC} from 'react';
import ProductDetails from "./ProductDetails.ts";

interface Props {
    productData: ProductDetails;
}

const ProductBox: FC<Props> = ({productData}) => {
    return (
        <div className={"product-box"}>
            <h3>{productData.title}</h3>
            <h4>{productData.subtitle}</h4>
            <img src={productData.image.folder + productData.image.images[0]} alt=""/>
        </div>
    );
};

export default ProductBox;