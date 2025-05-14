import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import "./image_viewer.css";

interface Props {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    images: string[];
    currentImageIndex: number;
}

const ImageViewer: FC<Props> = ({visible, setVisible, images, currentImageIndex}) => {

    const [selectedImage, setSelectedImage] = useState<string>(images[currentImageIndex]);

    useEffect(() => {
        setSelectedImage(images[currentImageIndex]);
    }, [currentImageIndex, images]);

    return (
        visible &&
        <div className={"image-viewer-overlay"}>
            <button className={"close-image-viewer-button"} onClick={()=> {setVisible(false)}}>Close</button>
            <div className="image-viewer">
                <div className="selected-image-wrapper">
                    <img src={selectedImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ImageViewer;