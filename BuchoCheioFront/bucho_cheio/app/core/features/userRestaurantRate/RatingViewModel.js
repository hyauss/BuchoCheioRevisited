import { RatingService } from "./RatingService.js";

export class RatingViewModel {

    constructor() {
        this.service = new RatingService();

        this.restauranteSelecionado = null;
        this.avaliacoes = [];

        this.carregando = false;
        this.erro = null;
    }

    async selecionarRestaurante(id) {
        this.carregando = true;
        this.erro = null;

        try {
            const avaliacoes = await this.service.buscarAvaliacoesPorRestaurante(id);

            if (!avaliacoes) {
                throw new Error("Restaurante não encontrado");
            }

            this.restauranteSelecionado = avaliacoes.restaurante;
            this.avaliacoes = avaliacoes.avaliacoes;
        } catch (erro) {
            this.erro = erro.message;
        } finally {
            this.carregando = false;
        }
    }
}
