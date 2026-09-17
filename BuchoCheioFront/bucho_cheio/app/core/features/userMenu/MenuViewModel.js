import { MenuService } from "./MenuService.js";

export class MenuViewModel {

    constructor() {
        this.service = new MenuService();

        this.restauranteSelecionado = null;
        this.pratos = [];

        this.carregando = false;
        this.erro = null;
    }

    async selecionarRestaurante(id) {
        this.carregando = true;
        this.erro = null;

        try {
            const cardapio = await this.service.buscarCardapioPorRestaurante(id);

            if (!cardapio) {
                throw new Error("Restaurante não encontrado");
            }

            this.restauranteSelecionado = cardapio.restaurante;
            this.pratos = cardapio.pratos;
        } catch (erro) {
            this.erro = erro.message;
        } finally {
            this.carregando = false;
        }
    }
}
