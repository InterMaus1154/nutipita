import {Dispatch, SetStateAction} from "react";

const fetchImages = (folder: string, setter: Dispatch<SetStateAction<string[]>>) =>{
    const loadImages = async () =>{
        let images = {} as Record<string, () => Promise<{ default: string }>>;
        switch (folder) {
            case "white_normal":
                images = import.meta.glob('/src/images/products/white_normal/*.{jpg,png,jpeg,svg}') as Record<string, () => Promise<{ default: string }>>;
                break;
            case "white_mini":
                images = import.meta.glob('/src/images/products/white_mini/*.{jpg,png,jpeg,svg}') as Record<string, () => Promise<{ default: string }>>;
                break;
            case "white_medium":
                images = import.meta.glob('/src/images/products/white_medium/*.{jpg,png,jpeg,svg}') as Record<string, () => Promise<{ default: string }>>;
                break;
            case "brown_normal":
                images = import.meta.glob('/src/images/products/brown_normal/*.{jpg,png,jpeg,svg}') as Record<string, () => Promise<{ default: string }>>;
                break;
            case "gallery":
                images = import.meta.glob("/src/images/gallery/*.{jpg,png,jpeg,svg}") as Record<string, () => Promise<{default: string}>>;
                break;
            default:
                images = {};
        }

        const loadedImages = await Promise.all(
            Object.values(images).map((importFn) => importFn().then(mod => mod.default))
        );
        setter(loadedImages);
    };
    loadImages();
};

export default fetchImages;