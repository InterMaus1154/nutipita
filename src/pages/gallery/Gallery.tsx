import {FC, useEffect, useState} from "react";
import "./gallery.css";
import fetchImages from "../../components/FetchImages.ts";
import ImageViewer from "../../components/image_viewer/ImageViewer.tsx";

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