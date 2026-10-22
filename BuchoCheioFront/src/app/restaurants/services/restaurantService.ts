import { Dish, Rating, Restaurant } from "../models/restaurant";

export const MOCK_RESTAURANTES: Restaurant[] = [
    {
        id: 1,
        name: "Doceria da Gigica",
        address: "Avenida 25, 399, Apto 74",
        CNPJ: "19.344.912/0001-09",
        medias: ["/designSystem/assets/exampleLogo.png"],
        restImages: [
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png"
        ],
        dishes: [
            {
                title: "Copo de morango com brownie",
                desc: "Um delicioso copo com morango e brownie",
                media: ["/designSystem/assets/exampleLogo.png"],
                price: 30
            }
        ],
        ratings: [
            {
                stars: 5,
                desc: "Muito bom!!"
            }
        ]
    },
    {
        id: 2,
        name: "Doceria da Gigica",
        address: "Avenida 25, 399, Apto 74",
        CNPJ: "19.344.912/0001-09",
        medias: ["/designSystem/assets/exampleLogo.png"],
        restImages: [
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png"
        ],
        dishes: [
            {
                title: "Copo de morango com brownie",
                desc: "Um delicioso copo com morango e brownie",
                media: ["/designSystem/assets/exampleLogo.png"],
                price: 30
            }
        ],
        ratings: [
            {
                stars: 5,
                desc: "Muito bom!!"
            },
            {
                stars: 3,
                desc: "Poderia ser melhor..."
            },
            {
                stars: 4,
                desc: "Muito bom! Uma pena terem esquecido a minha bebida"
            },
            {
                stars: 1,
                desc: "Show, amei"
            }
        ]
    },
    {
        id: 3,
        name: "Doceria da Gigica",
        address: "Avenida 25, 399, Apto 74",
        CNPJ: "19.344.912/0001-09",
        medias: ["/designSystem/assets/exampleLogo.png"],
        restImages: [
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png"
        ],
        dishes: [
            {
                title: "Copo de morango com brownie",
                desc: "Um delicioso copo com morango e brownie",
                media: ["/designSystem/assets/exampleLogo.png"],
                price: 30
            }
        ],
        ratings: [
            {
                stars: 3,
                desc: "Poderia ser melhor..."
            },
            {
                stars: 4,
                desc: "Muito bom! Uma pena terem esquecido a minha bebida"
            },
            {
                stars: 1,
                desc: "Show, amei"
            }
        ]
    },
    {
        id: 4,
        name: "Doceria da Gigica",
        address: "Avenida 25, 399, Apto 74",
        CNPJ: "19.344.912/0001-09",
        medias: ["/designSystem/assets/exampleLogo.png"],
        restImages: [
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png"
        ],
        dishes: [
            {
                title: "Copo de morango com brownie",
                desc: "Um delicioso copo com morango e brownie",
                media: ["/designSystem/assets/exampleLogo.png"],
                price: 30
            }
        ],
        ratings: [
            {
                stars: 5,
                desc: "Muito bom!!"
            },
            {
                stars: 4,
                desc: "Muito bom! Uma pena terem esquecido a minha bebida"
            }
        ]
    },
    {
        id: 5,
        name: "Doceria da Gigica",
        address: "Avenida 25, 399, Apto 74",
        CNPJ: "19.344.912/0001-09",
        medias: ["/designSystem/assets/exampleLogo.png"],
        restImages: [
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png",
            "/designSystem/assets/restImage.png"
        ],
        dishes: [
            {
                title: "Copo de morango com brownie",
                desc: "Um delicioso copo com morango e brownie",
                media: ["/designSystem/assets/exampleLogo.png"],
                price: 30
            },
            {
                title: "Copo de banana com brownie",
                desc: "Um delicioso copo com banana e brownie",
                media: ["/designSystem/assets/exampleLogo.png"],
                price: 30
            },
            {
                title: "Copo de açaí com brownie",
                desc: "Um delicioso copo com açaí e brownie",
                media: ["/designSystem/assets/exampleLogo.png"],
                price: 30
            },
            {
                title: "Copo de banana com brownie",
                desc: "Um delicioso copo com banana e brownie",
                media: ["/designSystem/assets/exampleLogo.png"],
                price: 30
            },
            {
                title: "Copo de kiwi com brownie",
                desc: "Um delicioso copo com kiwi e brownie",
                media: ["/designSystem/assets/exampleLogo.png"],
                price: 30
            }
        ],
        ratings: [
            {
                stars: 5,
                desc: "Muito bom!!"
            },
            {
                stars: 3,
                desc: "Poderia ser melhor..."
            },
            {
                stars: 4,
                desc: "Muito bom! Uma pena terem esquecido a minha bebida"
            },
            {
                stars: 1,
                desc: "Show, amei"
            }
        ]
    }
];

export class RestauranteService {
    private restaurantes: Restaurant[] = [...MOCK_RESTAURANTES];

    async buscarRestaurantes(): Promise<Restaurant[]> {
        return this.restaurantes;
    }

    async buscarRestaurantePorId(id: number): Promise<Restaurant | undefined> {
        return this.restaurantes.find((restaurante) => restaurante.id === id);
    }

    async criarRestaurante(restaurante: Restaurant): Promise<Restaurant> {
        this.restaurantes.push(restaurante);
        return restaurante;
    }
}

export const restauranteService = new RestauranteService();

export async function getRestaurants(): Promise<Restaurant[]> {
    return restauranteService.buscarRestaurantes();
}

export async function getRestaurantById(id: number): Promise<Restaurant | undefined> {
    return restauranteService.buscarRestaurantePorId(id);
}
