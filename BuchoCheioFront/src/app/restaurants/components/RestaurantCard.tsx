"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Restaurant } from "../models/restaurant";
import {
    getAverageRating,
    getStoredRatings,
    RATING_UPDATED_EVENT,
} from "../services/ratingStorage";

interface RestaurantCardProps {
    restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
    const [ratings, setRatings] = useState(restaurant.ratings);
    const rawMedia = restaurant.medias?.[0];
    const imageSrc = !rawMedia
        ? "/designSystem/assets/exampleLogo.png"
        : rawMedia.startsWith("Assets/")
        ? `/designSystem/assets/${rawMedia.replace("Assets/", "")}`
        : rawMedia;
    const averageRating = getAverageRating(ratings);

    useEffect(() => {
        const updateRatings = () => {
            const storedRatings = getStoredRatings(restaurant.id);
            if (storedRatings) {
                setRatings(storedRatings);
            }
        };

        updateRatings();
        window.addEventListener(RATING_UPDATED_EVENT, updateRatings);
        window.addEventListener("storage", updateRatings);

        return () => {
            window.removeEventListener(RATING_UPDATED_EVENT, updateRatings);
            window.removeEventListener("storage", updateRatings);
        };
    }, [restaurant.id]);

    return (
        <article className="relative flex w-full min-h-[120px] rounded-lg bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden pr-[35%]">
            <div className="flex flex-col flex-1 min-w-0 p-5 text-brand-text">
                <p className="pb-[10px] text-sm md:text-base leading-snug">
                    Restaurante: {restaurant.name}
                </p>
                <p className="pb-[10px] text-sm md:text-base leading-snug">
                    Endereço: {restaurant.address}
                </p>
                <p className="pb-[10px] text-sm md:text-base leading-snug">
                    CNPJ: {restaurant.CNPJ}
                </p>
                <div
                    className="mb-3 flex items-center gap-1"
                    aria-label={`Avaliação: ${averageRating.toFixed(1).replace(".", ",")} de 5`}
                >
                    {Array.from({ length: 5 }, (_, index) => (
                        <span
                            key={index}
                            aria-hidden="true"
                            className={`h-5 w-5 ${
                                index < Math.round(averageRating)
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
                    <span className="ml-1 text-sm">
                        {averageRating.toFixed(1).replace(".", ",")}
                    </span>
                </div>
                <Link
                    href={`/userMenu?id=${restaurant.id}`}
                    className="mt-auto w-full h-[37px] flex items-center justify-center bg-brand-button text-white text-base font-normal rounded-lg transition-transform duration-200 hover:scale-105 active:scale-100"
                >
                    Ver restaurante
                </Link>
            </div>

            <div className="absolute right-0 top-0 w-[35%] h-full">
                <Image
                    src={imageSrc}
                    alt={`Logo do restaurante ${restaurant.name}`}
                    fill
                    className="object-cover rounded-r-lg"
                    sizes="(max-width: 924px) 35vw, 20vw"
                />
            </div>
        </article>
    );
}
