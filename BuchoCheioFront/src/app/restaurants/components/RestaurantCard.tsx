import Image from "next/image";
import Link from "next/link";
import { Restaurant } from "../models/restaurant";

interface RestaurantCardProps {
    restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
    const rawMedia = restaurant.medias?.[0];
    const imageSrc = !rawMedia
        ? "/designSystem/assets/exampleLogo.png"
        : rawMedia.startsWith("Assets/")
        ? `/designSystem/assets/${rawMedia.replace("Assets/", "")}`
        : rawMedia;

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
                <Link
                    // href={`/userMenu?id=${restaurant.id}`}
                    href="/userMenu"
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
