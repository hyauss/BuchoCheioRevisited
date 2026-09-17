import { Dish } from "../restaurantes/Models/Dish.js";
import { Rating } from "../restaurantes/Models/Rating.js";
import { Restaurant } from "../restaurantes/Models/Restaurant.js";

export class RatingService {

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
        )
    ];

    buscarRestaurantes() {
        return this.restaurantes;
    }

    buscarRestaurantePorId(id) {
        return this.buscarRestaurantes().find(
            restaurante => restaurante.id === id
        );
    }

    buscarAvaliacoesPorRestaurante(id) {
        const restaurante = this.buscarRestaurantePorId(id);

        if (!restaurante) {
            return null;
        }

        return {
            restaurante,
            avaliacoes: restaurante.ratings
        };
    }
}
