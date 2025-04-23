import {FC} from 'react';
import './products.css';
import products from '../../assets/products.json';
import ProductBox from "../../components/products/ProductBox.tsx";

export interface ProductDetails {
    title: string;
    subtitle: string;
    ingredients: string[];
    packaging: {
        pieces: number;
    };
}


const Products: FC = () => {
    return (
        <section className={"page products-page"}>
            <h2 className="section-title">Products</h2>
            <div className="product-list">
                {
                    products.map(product => {
                        return <ProductBox productData={product}/>
                    })
                }
            </div>
        </section>
    );
};

export default Products;