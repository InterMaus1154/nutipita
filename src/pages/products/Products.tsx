import {FC} from 'react';
import './products.css';
import products from "../../assets/products.json";
import ProductBox from "../../components/products/ProductBox.tsx";
import ProductDetails from "../../components/products/ProductDetails.ts";
import {Helmet} from "react-helmet-async";

const Products: FC = () => {
    return (
        <section className={"page products-page"}>
            <Helmet>
                <link rel="canonical" href="https://nutipita.co.uk/products" />
            </Helmet>
            <h2 className="section-title">Products</h2>
            <div className="product-list">
                {
                    products.map((product) => {
                        return <ProductBox productData={product as ProductDetails}/>
                    })
                }
            </div>
        </section>
    );
};

export default Products;