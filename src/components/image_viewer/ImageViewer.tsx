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
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(currentImageIndex);

    const onPreviousImageHandler = () => {
        setSelectedImageIndex(prevState => ((prevState - 1) + images.length) % images.length);
    };

    const onNextImageHandler = () => {
        setSelectedImageIndex(prevState => (prevState + 1) % images.length);
    };

    useEffect(() => {
        setSelectedImageIndex(currentImageIndex);
    }, [currentImageIndex]);

    useEffect(() => {
        setSelectedImage(images[selectedImageIndex]);
    }, [selectedImageIndex, images, setSelectedImage]);

    useEffect(() => {
        // Disable body scroll
        if (visible) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            // Re-enable body scroll when component unmounts
            document.body.classList.remove("no-scroll");
        };
    }, [visible]);

    return (
        visible &&
        <div className={"image-viewer-overlay"}>
            <button className={"close-image-viewer-button"} onClick={() => {
                setVisible(false)
            }}>Close
            </button>
            <div className="image-viewer">
                <div className="selected-image-wrapper">
                    <img src={selectedImage} alt=""/>
                </div>
                <div className="control-buttons">
                    {/*show previous image*/}
                    <button onClick={onPreviousImageHandler} aria-label={"Show previous image"}
                            title={"Show previous image"}>&lt;</button>
                    {/*show next image*/}
                    <button onClick={onNextImageHandler} aria-label={"Show next image"}
                            title={"Show next image"}>&gt;</button>
                </div>
            </div>

        </div>
    );
};

export default ImageViewer;