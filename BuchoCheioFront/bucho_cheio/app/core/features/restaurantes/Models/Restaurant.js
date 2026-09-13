export class Restaurant {

    constructor(
        id,
        name,
        address,
        CNPJ,
        medias = [],
        dishes = [],
        ratings = []
    ) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.CNPJ = CNPJ;
        this.medias = medias;
        this.dishes = dishes;
        this.ratings = ratings;
    }
}