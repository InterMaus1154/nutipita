import {FC, useEffect, useRef, useState} from 'react';
import ProductDetails from "./ProductDetails.ts";
import {Link} from "react-router-dom";

interface Props {
    productData: ProductDetails;
}

const ProductBox: FC<Props> = ({productData}) => {

    // TODO
    // const _images = import.meta.glob('/public/'+productData.image.folder);

    const [images] = useState<string[]>(productData.image.images);
    const [index, setIndex] = useState<number>(0);
    const [currentImage, setCurrentImage] = useState<string>(images[index]);

    const preLoadedImagesRef = useRef<Set<string>>(new Set());

    const rightClickHandler = () => {
        setIndex(prevState => (prevState + 1) % images.length);
    };

    const leftClickHandler = () => {
        setIndex(prevState => (prevState - 1 + images.length) % images.length);
    };

    useEffect(() => {

        setCurrentImage(images[index]);

        const preLoadImage = (src: string) => {
            if (preLoadedImagesRef.current.has(src)) return;
            const img = new Image();
            img.src = src;
            preLoadedImagesRef.current.add(src);
        };
        const imagePath = productData.image.folder;
        preLoadImage(imagePath + images[(index + 1) % images.length]);
        preLoadImage(imagePath + images[(index - 1 + images.length) % images.length]);

    }, [index, images, setCurrentImage, productData.image.folder]);

    return (
        <div className={"product-box"}>
            <div className="product-box-header">
                <img className={"product-image"} key={currentImage} src={productData.image.folder + currentImage}
                     alt=""/>
                <button className={"image-selector-button left"} onClick={leftClickHandler}
                        aria-label={"Go left image"}>&lt;</button>
                <button className={"image-selector-button right"} onClick={rightClickHandler}
                        aria-label={"Go right image"}>&gt;</button>
            </div>
            <div className="product-box-body">
                <div className="product-box-body-header">
                    <h3 className={"product-title"}>{productData.title}</h3>
                </div>
                <div className="product-box-body-subheader">
                    <h4 className={"product-subtitle"}>{productData.subtitle}</h4>
                    <p className="product-packaging">{productData.packaging.pieces} pieces/bag</p>
                </div>
                <div className="product-ingredients">
                    <p>Ingredients:</p>
                    <div className="ingredient-list">
                        {productData.ingredients.map(ingredient => <p>{ingredient}</p>)}
                    </div>
                </div>
                <p className={"product-cta"}>Please <Link to={'/contact'}>contact us</Link> for pricing!</p>
            </div>
        </div>
    );
};

export default ProductBox;