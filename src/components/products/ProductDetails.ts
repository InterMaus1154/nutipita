export default interface ProductDetails {
    title: string;
    subtitle: string;
    ingredients: string[];
    packaging: {
        pieces: number;
    };
    image: {
        folder: string;
    };
}