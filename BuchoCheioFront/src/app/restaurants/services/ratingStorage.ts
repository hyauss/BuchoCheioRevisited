import { Rating } from "../models/restaurant";

const RATINGS_STORAGE_KEY = "bucho-cheio:restaurant-ratings";
export const RATING_UPDATED_EVENT = "bucho-cheio:rating-updated";

type StoredRatings = Record<string, Rating[]>;

function readStoredRatings(): StoredRatings {
    if (typeof window === "undefined") {
        return {};
    }

    try {
        const storedRatings = window.localStorage.getItem(RATINGS_STORAGE_KEY);
        if (!storedRatings) {
            return {};
        }

        const parsedRatings: unknown = JSON.parse(storedRatings);
        return parsedRatings && typeof parsedRatings === "object"
            ? (parsedRatings as StoredRatings)
            : {};
    } catch {
        return {};
    }
}

export function getStoredRatings(restaurantId: number): Rating[] | undefined {
    return readStoredRatings()[restaurantId];
}

export function getAverageRating(ratings: Rating[]): number {
    if (ratings.length === 0) {
        return 0;
    }

    return ratings.reduce((total, rating) => total + rating.stars, 0) /
        ratings.length;
}

export function saveRatings(restaurantId: number, ratings: Rating[]) {
    if (typeof window === "undefined") {
        return;
    }

    const storedRatings = readStoredRatings();
    storedRatings[restaurantId] = ratings;
    window.localStorage.setItem(
        RATINGS_STORAGE_KEY,
        JSON.stringify(storedRatings),
    );
    window.dispatchEvent(new CustomEvent(RATING_UPDATED_EVENT));
}
