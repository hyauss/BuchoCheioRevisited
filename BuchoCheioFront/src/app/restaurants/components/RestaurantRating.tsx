"use client";

import { useEffect, useState } from "react";
import {
    getAverageRating,
    getStoredRatings,
    RATING_UPDATED_EVENT,
} from "../services/ratingStorage";

interface RestaurantRatingProps {
    restaurantId: number;
    initialRating: number;
}

export function RestaurantRating({
    restaurantId,
    initialRating,
}: RestaurantRatingProps) {
    const [rating, setRating] = useState(initialRating);

    useEffect(() => {
        const updateRating = async () => {
            const ratings = await getStoredRatings(restaurantId);
            setRating(ratings.length ? getAverageRating(ratings) : 0);
        };

        void updateRating();
        window.addEventListener(RATING_UPDATED_EVENT, updateRating);

        return () => {
            window.removeEventListener(RATING_UPDATED_EVENT, updateRating);
        };
    }, [restaurantId]);

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
