import {FC, useEffect, useState} from "react";
import "./gallery.css";
import fetchImages from "../../components/FetchImages.ts";
import ImageViewer from "../../components/image_viewer/ImageViewer.tsx";
import {Helmet} from "react-helmet-async";

const Gallery: FC = () => {

    const [images, setImages] = useState<string[]>([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [imageViewerVisible, setImageViewerVisible] = useState<boolean>(false);

    // load images on load
    useEffect(() => {
        fetchImages("gallery", setImages);
    }, []);

    useEffect(() => {
        if (images.length === 0) return;
    }, [images]);

    return (
        <section className={"page gallery-page"}>
            <Helmet>
                <title>Gallery - Nuti Pita: Fresh, Handmade, Authentic Pita Bread in London</title>
                <meta name="description"
                      content="Explore our gallery of fresh, handmade pita bread and the artisan process that brings traditional flavours to life in London."/>
                <meta property="og:title"
                      content="Gallery - Nuti Pita: Fresh, Handmade, Authentic Pita Bread in London"/>
                <meta property="og:description"
                      content="Explore our gallery of fresh, handmade pita bread and the artisan process that brings traditional flavours to life in London."/>
                <meta property="og:url" content="https://nutipita.co.uk/gallery"/>
                <meta property="og:image" content="https://nutipita.co.uk/icon/icon_300x300.png"/>
                <meta property="og:type" content="website"/>
                <meta property="og:locale" content="en_GB"/>
                <link rel="canonical" href="https://nutipita.co.uk/gallery"/>
            </Helmet>
            <h2 className="section-title">Gallery</h2>
            <div className="image-list">
                {/*render images*/}
                {images.map((image: string, index: number) => {
                    return (
                        <div className={"gallery-image-wrapper"}
                             onClick={() => {
                                 setSelectedImageIndex(index);
                                 setImageViewerVisible(true);
                             }}
                             aria-hidden={true} title={"Click to view in large"}>
                            <div className="expand-icon" aria-hidden={true}>
                                <img src="icon/expand-icon.png" alt=""/>
                            </div>
                            <img src={image} alt="" aria-hidden={true}

                            />
                        </div>
                    );
                })}
            </div>
            {/*expandable gallery*/}
            <ImageViewer images={images}
                         currentImageIndex={selectedImageIndex}
                         visible={imageViewerVisible}
                         setVisible={setImageViewerVisible}/>
        </section>
    );
};

export default Gallery;