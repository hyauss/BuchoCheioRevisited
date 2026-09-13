export class Dish {

    constructor(
        title,
        desc,
        media = [],
        price
    ) {
        this.title = title;
        this.desc = desc;
        this.media = media;
        this.price = price;
    }
}