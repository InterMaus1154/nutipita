import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import "./image_viewer.css";

interface Props {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    images: string[];
    currentImageIndex: number;
}

const ImageViewer: FC<Props> = ({visible, setVisible, images, currentImageIndex}) => {


    return (
        visible &&
        <div className={"image-viewer-overlay"}>
            <div className="image-viewer">

            </div>
        </div>
    );
};

export default ImageViewer;