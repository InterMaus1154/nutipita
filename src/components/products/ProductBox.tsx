import {FC, useEffect, useState} from 'react';
import ProductDetails from "./ProductDetails.ts";
import {Link} from "react-router-dom";
import fetchImages from "../FetchImages.ts";
import preLoadImage from "../ImagePreloader.ts";
import ImageViewer from "../image_viewer/ImageViewer.tsx";

interface Props {
    productData: ProductDetails;
}

const ProductBox: FC<Props> = ({productData}) => {

    const [imageViewerVisible, setImageViewerVisible] = useState<boolean>(false);

    // product images
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        // fetch images dynamically and set to current product images
        fetchImages(productData.image.folder, setImages);
    }, [productData]);

    // index tracker for selected image
    const [index, setIndex] = useState<number>(0);

    // currently visible image
    const [currentImage, setCurrentImage] = useState<string>(images[index]);

    // show next image
    const rightClickHandler = () => {
        setIndex(prevState => (prevState + 1) % images.length);
    };

    // show previous image
    const leftClickHandler = () => {
        setIndex(prevState => (prevState - 1 + images.length) % images.length);
    };

    useEffect(() => {

        setCurrentImage(images[index]);

        // preload previous and next image
        preLoadImage(images[(index + 1) % images.length]);
        preLoadImage(images[(index - 1 + images.length) % images.length]);

    }, [index, images, setCurrentImage]);

    return (
        <div className={"product-box"}>
            <div className="product-box-header">
                <div className="product-image-wrapper">
                    <img className={"product-image"} key={currentImage} src={currentImage}
                         alt={`Image of ${productData.title}`}/>
                </div>
                <button className={"image-selector-button left"} onClick={leftClickHandler}
                        aria-label={"Show previous image"}>&lt;</button>
                <button className={"image-selector-button right"} onClick={rightClickHandler}
                        aria-label={"Show next image"}>&gt;</button>
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
                        {productData.ingredients.join(', ')}
                    </div>
                </div>
                <p className={"product-cta"}>Please <Link to={'/contact'}>contact us</Link> for pricing!</p>
            </div>
            <ImageViewer visible={imageViewerVisible}
                         setVisible={setImageViewerVisible}
                         images={images}
                         currentImageIndex={index}/>
        </div>
    );
};

export default ProductBox;