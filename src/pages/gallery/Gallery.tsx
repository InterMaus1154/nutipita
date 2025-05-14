import {FC, useEffect, useState} from "react";
import "./gallery.css";
import fetchImages from "../../components/FetchImages.ts";
import ImageViewer from "../../components/image_viewer/ImageViewer.tsx";

const Gallery: FC = () => {

    const [images, setImages] = useState<string[]>([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
    const [imageViewerVisible, setImageViewerVisible] = useState<boolean>(false);

    useEffect(() => {
        fetchImages("gallery", setImages);
    }, []);

    useEffect(() => {
        if (images.length === 0) return;
    }, [images]);

    return (
        <section className={"page gallery-page"}>
            <h2 className="section-title">Gallery</h2>
            <div className="image-list">
                {images.map((image: string, index: number) => {
                    return (
                        <div className={"gallery-image-wrapper"} aria-hidden={true}>
                            <img src={image} alt="" aria-hidden={true}
                                 onClick={() => {
                                     setSelectedImageIndex(index);
                                     setImageViewerVisible(true);
                                 }}
                            />
                        </div>
                    );
                })}
            </div>
            <ImageViewer images={images}
                         currentImageIndex={selectedImageIndex}
                         visible={imageViewerVisible}
                         setVisible={setImageViewerVisible}/>
        </section>
    );
};

export default Gallery;