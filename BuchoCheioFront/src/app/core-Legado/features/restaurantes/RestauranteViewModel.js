import { RestauranteService } from './RestauranteService.js';

export class RestauranteViewModel {

    constructor() {
        this.service = new RestauranteService();

        this.restaurantes = [];
        this.restauranteSelecionado = null;

        this.carregando = false;
        this.erro = null;
    }

    async carregarRestaurantes() {
        this.carregando = true;
        this.erro = null;

        try {
            this.restaurantes = await this.service.buscarRestaurantes();
        } catch (erro) {
            this.erro = erro.message;
        } finally {
            this.carregando = false;
        }
    }

    async selecionarRestaurante(id) {
        this.carregando = true;
        this.erro = null;

        try {
            this.restauranteSelecionado =
                await this.service.buscarRestaurantePorId(id);
        } catch (erro) {
            this.erro = erro.message;
        } finally {
            this.carregando = false;
        }
    }

    async criarRestaurante(restaurante) {
        this.carregando = true;
        this.erro = null;

        try {
            const novoRestaurante =
                await this.service.criarRestaurante(restaurante);

            this.restaurantes.push(novoRestaurante);

        } catch (erro) {
            this.erro = erro.message;
        } finally {
            this.carregando = false;
        }
    }
}