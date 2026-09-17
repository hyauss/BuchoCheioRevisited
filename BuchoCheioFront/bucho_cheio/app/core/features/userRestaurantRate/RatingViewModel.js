import { RestauranteViewModel } from "../restaurantes/RestauranteViewModel.js";

export class RatingViewModel {

    constructor() {
        this.restauranteViewModel = new RestauranteViewModel();

        this.restauranteSelecionado = null;
        this.avaliacoes = [];

        this.carregando = false;
        this.erro = null;
    }

    async selecionarRestaurante(id) {
        this.carregando = true;
        this.erro = null;

        try {
            await this.restauranteViewModel.selecionarRestaurante(id);
            const restaurante = this.restauranteViewModel.restauranteSelecionado;

            if (!restaurante) {
                throw new Error("Restaurante não encontrado");
            }

            this.restauranteSelecionado = restaurante;
            this.avaliacoes = restaurante.ratings ?? [];
        } catch (erro) {
            this.erro = erro.message;
        } finally {
            this.carregando = false;
        }
    }
}
