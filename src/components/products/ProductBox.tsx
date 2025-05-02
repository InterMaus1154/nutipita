import {FC, useEffect, useRef, useState} from 'react';
import ProductDetails from "./ProductDetails.ts";

interface Props {
    productData: ProductDetails;
}

const ProductBox: FC<Props> = ({productData}) => {

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
                <h3>{productData.title}</h3>
                <h4>{productData.subtitle}</h4>
            </div>
        </div>
    );
};

export default ProductBox;