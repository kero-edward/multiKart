export interface Product {
    id: number;
    category: string;
    name: string;
    images: string[];
    description: string;
    price: number;
    oldPrice?: number;
    offer?: string;
    colors?: string;
    quantity: number;
    video?: string;
}
