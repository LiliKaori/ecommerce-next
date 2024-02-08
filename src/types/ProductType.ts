export type ProductFakeType = {
    id: string;
    title: string;
    price: number | null;
    description: string | null;
    image: string;
    category: string;
    quantity?: number | 1;
}

export type ProductType = {
    id: string;    
    price: number | null;
    title: string;
    quantity?: number | 1;
    image: string;
    description: string | null;
    currency?: string;
}