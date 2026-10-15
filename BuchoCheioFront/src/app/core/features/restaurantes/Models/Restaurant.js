export class Restaurant {

    constructor(
        id,
        name,
        address,
        CNPJ,
        medias = [],
        restImages = [],
        dishes = [],
        ratings = []
    ) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.CNPJ = CNPJ;
        this.medias = medias;
        this.restImages = restImages;
        this.dishes = dishes;
        this.ratings = ratings;
    }
}