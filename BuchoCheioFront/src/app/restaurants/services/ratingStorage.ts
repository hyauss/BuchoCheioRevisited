import { Rating } from "../models/restaurant";

export const RATING_UPDATED_EVENT = "bucho-cheio:rating-updated";

export async function getStoredRatings(restaurantId: number): Promise<Rating[]> {
    const response = await fetch(`/api/restaurants/${restaurantId}/ratings`, {
        cache: "no-store",
    });
    if (!response.ok) {
        throw new Error("Não foi possível carregar as avaliações.");
    }

    return response.json() as Promise<Rating[]>;
}

export function getAverageRating(ratings: Rating[]): number {
    if (ratings.length === 0) {
        return 0;
    }

    return ratings.reduce((total, rating) => total + rating.stars, 0) /
        ratings.length;
}

export async function saveRating(restaurantId: number, rating: Rating,): Promise<Rating[]> {
    const response = await fetch(`/api/restaurants/${restaurantId}/ratings`, { //
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rating),
    });
    if (!response.ok) {
        throw new Error("Não foi possível salvar a avaliação.");
    }

    const ratings = (await response.json()) as Rating[];
    window.dispatchEvent(new CustomEvent(RATING_UPDATED_EVENT));
    return ratings;
}
