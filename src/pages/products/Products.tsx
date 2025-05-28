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
                <title>Products - Nuti Pita: Fresh, Handmade, Authentic Pita Bread in London</title>
                <meta name="description"
                      content="Discover Nuti Pita’s range of authentic, handmade pita bread - baked fresh daily in London using simple, high-quality ingredients. Soft, fluffy, and perfect for every meal."/>
                <meta property="og:title"
                      content="Products - Nuti Pita: Fresh, Handmade, Authentic Pita Bread in London"/>
                <meta property="og:description"
                      content="Discover Nuti Pita’s range of authentic, handmade pita bread - baked fresh daily in London using simple, high-quality ingredients. Soft, fluffy, and perfect for every meal."/>
                <meta property="og:url" content="https://nutipita.co.uk/products"/>
                <meta property="og:image" content="https://nutipita.co.uk/icon/icon_300x300.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:locale" content="en_GB"/>
                <link rel="canonical" href="https://nutipita.co.uk/products"/>
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