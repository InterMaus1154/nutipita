
const preLoadedImages: Set<string> = new Set();

/**
 * Preload an image if it has not been loaded yet
 * @param src
 */
const preLoadImage = (src: string) => {
    if (preLoadedImages.has(src)) return;
    const img = new Image();
    img.src = src;
    preLoadedImages.add(src);
};

export default preLoadImage;