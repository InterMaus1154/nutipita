import {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from "react";
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

    const imageViewerRef = useRef<HTMLDivElement>(document.createElement("div"));

    // show previous image
    const onPreviousImageHandler = () => {
        setSelectedImageIndex(prevState => ((prevState - 1) + images.length) % images.length);
    };

    // show next image
    const onNextImageHandler = () => {
        setSelectedImageIndex(prevState => (prevState + 1) % images.length);
    };

    // track index coming from props
    useEffect(() => {
        setSelectedImageIndex(currentImageIndex);
    }, [currentImageIndex]);

    // track component index state
    useEffect(() => {
        setSelectedImage(images[selectedImageIndex]);
    }, [selectedImageIndex, images, setSelectedImage]);

    // track if component is visible
    useEffect(() => {
        if (visible) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        const onMouseDownHandler = (e: MouseEvent) => {
            // check if visible, and if the click was made within the component
            if (visible && imageViewerRef.current && !imageViewerRef.current.contains(e.target as Node)) {
                setVisible(false);
            }
        }

        document.addEventListener("mousedown", onMouseDownHandler);

        return () => {
            // Re-enable body scroll when component unmounts
            document.body.classList.remove("no-scroll");
            document.removeEventListener("mousedown", onMouseDownHandler);
        };
    }, [setVisible, visible]);

    return (
        visible &&
        <div className={"image-viewer-overlay"}>
            <button className={"close-image-viewer-button"}
                    aria-label={"Close image viewer"}
                    title={"Close image viewer"}
                    onClick={() => {
                        setVisible(false)
                    }}>X
            </button>
            <div className="image-viewer" ref={imageViewerRef}>
                <div className="selected-image-wrapper">
                    <img src={selectedImage} alt=""/>
                </div>
                <div className="control-buttons">
                    {/*show previous image*/}
                    <button onClick={onPreviousImageHandler}
                            className={"image-selector-button left"}
                            aria-label={"Show previous image"}
                            title={"Show previous image"}>&lt;</button>
                    {/*show next image*/}
                    <button onClick={onNextImageHandler}
                            className={"image-selector-button right"}
                            aria-label={"Show next image"}
                            title={"Show next image"}>&gt;</button>
                </div>
            </div>

        </div>
    );
};

export default ImageViewer;