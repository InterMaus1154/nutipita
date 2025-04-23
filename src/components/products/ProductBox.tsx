import {FC} from 'react';
import {ProductDetails} from "../../pages/products/Products.tsx";

interface Props {
    productData: ProductDetails;
}

const ProductBox: FC<Props> = ({productData}) => {
    return (
        <div className={"product-box"}>
            <h3>{productData.title}</h3>
            <h4>{productData.subtitle}</h4>
        </div>
    );
};

export default ProductBox;