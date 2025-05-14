import {FC, useEffect, useState} from "react";
import "./gallery.css";
import fetchImages from "../../components/products/FetchImages.ts";
const Gallery : FC = () => {

    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        fetchImages("gallery", setImages);
    }, []);

    useEffect(() => {
        if(images.length === 0) return;
        console.log(images);
    }, [images]);

    return (
        <section className={"page gallery-page"}>
            <h2 className="section-title">Gallery</h2>
        </section>
    );
};

export default Gallery;