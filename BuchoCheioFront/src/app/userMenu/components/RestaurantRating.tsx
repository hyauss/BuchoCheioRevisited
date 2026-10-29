"use client";

import { useSyncExternalStore } from "react";
import {
    getAverageRating,
    getStoredRatings,
    RATING_UPDATED_EVENT,
} from "../../restaurants/services/ratingStorage";

interface RestaurantRatingProps {
    restaurantId: number;
    initialRating: number;
}

export function RestaurantRating({
    restaurantId,
    initialRating,
}: RestaurantRatingProps) {
    const subscribe = (onStoreChange: () => void) => {
        const updateRating = () => onStoreChange();

        window.addEventListener(RATING_UPDATED_EVENT, updateRating);
        window.addEventListener("storage", updateRating);
        window.addEventListener("pageshow", updateRating);
        window.addEventListener("focus", updateRating);

        return () => {
            window.removeEventListener(RATING_UPDATED_EVENT, updateRating);
            window.removeEventListener("storage", updateRating);
            window.removeEventListener("pageshow", updateRating);
            window.removeEventListener("focus", updateRating);
        };
    };

    const getSnapshot = () => {
        const storedRatings = getStoredRatings(restaurantId);
        return storedRatings?.length
            ? getAverageRating(storedRatings).toFixed(4)
            : initialRating.toFixed(4);
    };
    const rating = Number(
        useSyncExternalStore(subscribe, getSnapshot, () =>
            initialRating.toFixed(4),
        ),
    );

    return (
        <div
            className="ml-0 flex items-center gap-1 sm:ml-[4vw]"
            aria-label={`Avaliação: ${rating.toFixed(1).replace(".", ",")} de 5`}
        >
            {Array.from({ length: 5 }, (_, index) => (
                <span
                    key={index}
                    aria-hidden="true"
                    className={`h-8 w-8 ${
                        index < Math.round(rating)
                            ? "bg-brand-accent"
                            : "bg-brand-text/20"
                    }`}
                    style={{
                        mask: "url('/designSystem/assets/star.fill.svg') center / contain no-repeat",
                        WebkitMask:
                            "url('/designSystem/assets/star.fill.svg') center / contain no-repeat",
                    }}
                />
            ))}
            <span className="ml-2 text-sm">
                {rating.toFixed(1).replace(".", ",")}/5
            </span>
        </div>
    );
}
