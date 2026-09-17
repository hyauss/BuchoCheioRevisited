import { Dish } from './Models/Dish.js';
import { Rating } from './Models/Rating.js';
import { Restaurant } from './Models/Restaurant.js';

export class RestauranteService {

restaurantes = [
        new Restaurant(
            1,
            "Doceria da Gigica",
            "Avenida 25, 399, Apto 74",
            "19.344.912/0001-09",
            ["Assets/exampleLogo.png"],
            [
                new Dish(
                    "Copo de morango com brownie",
                    "Um delicioso copo com morango e brownie",
                    ["Assets/exampleLogo.png"],
                    30
                )
            ],
            [
                new Rating(
                    5,
                    "Muito bom!!"
                )
            ]
        ),
        new Restaurant(
            2,
            "Doceria da Gigica",
            "Avenida 25, 399, Apto 74",
            "19.344.912/0001-09",
            ["Assets/exampleLogo.png"],
            [
                new Dish(
                    "Copo de morango com brownie",
                    "Um delicioso copo com morango e brownie",
                    ["Assets/exampleLogo.png"],
                    30
                )
            ],
            [
                new Rating(
                    5,
                    "Muito bom!!"
                ),
                new Rating(
                    3,
                    "Poderia ser melhor..."
                ),
                new Rating(
                    4,
                    "Muito bom! Uma pena terem esquecido a minha bebida"
                ),
                new Rating(
                    1,
                    "Show, amei"
                ),
            ]
        ),
        new Restaurant(
            3,
            "Doceria da Gigica",
            "Avenida 25, 399, Apto 74",
            "19.344.912/0001-09",
            ["Assets/exampleLogo.png"],
            [
                new Dish(
                    "Copo de morango com brownie",
                    "Um delicioso copo com morango e brownie",
                    ["Assets/exampleLogo.png"],
                    30
                )
            ],
            [
                new Rating(
                    3,
                    "Poderia ser melhor..."
                ),
                new Rating(
                    4,
                    "Muito bom! Uma pena terem esquecido a minha bebida"
                ),
                new Rating(
                    1,
                    "Show, amei"
                ),
            ]
        ),
        new Restaurant(
            4,
            "Doceria da Gigica",
            "Avenida 25, 399, Apto 74",
            "19.344.912/0001-09",
            ["Assets/exampleLogo.png"],
            [
                new Dish(
                    "Copo de morango com brownie",
                    "Um delicioso copo com morango e brownie",
                    ["Assets/exampleLogo.png"],
                    30
                )
            ],
            [
                new Rating(
                    5,
                    "Muito bom!!"
                ),
                
                new Rating(
                    4,
                    "Muito bom! Uma pena terem esquecido a minha bebida"
                ),
            ]
        ),
        new Restaurant(
            5,
            "Doceria da Gigica",
            "Avenida 25, 399, Apto 74",
            "19.344.912/0001-09",
            ["Assets/exampleLogo.png"],
            [
                new Dish(
                    "Copo de morango com brownie",
                    "Um delicioso copo com morango e brownie",
                    ["Assets/exampleLogo.png"],
                    30
                )
            ],
            [
                new Rating(
                    5,
                    "Muito bom!!"
                ),
                new Rating(
                    3,
                    "Poderia ser melhor..."
                ),
                new Rating(
                    4,
                    "Muito bom! Uma pena terem esquecido a minha bebida"
                ),
                new Rating(
                    1,
                    "Show, amei"
                ),
            ]
        ),
    ];

    buscarRestaurantes() {
        return this.restaurantes;
    }

    buscarRestaurantePorId(id) {
        return this.buscarRestaurantes().find(
            restaurante => restaurante.id === id
        );
    }

    criarRestaurante(restaurante) {
        this.buscarRestaurantes().push(restaurante);
        return this.buscarRestaurantePorId(restaurante.id)
    }
}