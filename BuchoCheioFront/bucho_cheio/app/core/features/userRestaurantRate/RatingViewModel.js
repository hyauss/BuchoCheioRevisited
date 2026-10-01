import { RestauranteViewModel } from "../restaurantes/RestauranteViewModel.js";

export class RatingViewModel {

    constructor() {
        this.restauranteViewModel = new RestauranteViewModel();

        this.restauranteSelecionado = null;
        this.avaliacoes = [];

        this.carregando = false;
        this.erro = null;
    }

    calcularMediaAvaliacoes() {
        if (!this.avaliacoes.length) {
            return 0;
        }

        const somaNotas = this.avaliacoes.reduce(
            (soma, avaliacao) => soma + Number(avaliacao.stars),
            0
        );

        return somaNotas / this.avaliacoes.length;
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
