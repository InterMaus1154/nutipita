
const preLoadedImages: Set<string> = new Set();

const preLoadImage = (src: string) => {
    if (preLoadedImages.has(src)) return;
    const img = new Image();
    img.src = src;
    preLoadedImages.add(src);
};

export default preLoadImage;