import {FC, useEffect, useState} from "react";
import "./gallery.css";
import fetchImages from "../../components/FetchImages.ts";
const Gallery : FC = () => {

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetchImages("gallery", setImages);
    }, []);

    useEffect(() => {
        if(images.length === 0) return;
    }, [images]);

    return (
        <section className={"page gallery-page"}>
            <h2 className="section-title">Gallery</h2>
            <div className="image-list">
                {images.map((image: string) => {
                    return(
                        <div className={"gallery-image-wrapper"} aria-hidden={true}>
                            <img src={image} alt="" aria-hidden={true}/>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Gallery;