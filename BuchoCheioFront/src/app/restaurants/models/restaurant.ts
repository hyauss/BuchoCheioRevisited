export interface Dish {
    title: string;
    desc: string;
    media: string[];
    price: number;
}

export interface Rating {
    stars: number;
    desc: string;
}

export interface Restaurant {
    id: number;
    name: string;
    address: string;
    CNPJ: string;
    medias: string[];
    restImages: string[];
    dishes: Dish[];
    ratings: Rating[];
}
