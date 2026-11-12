"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import restaurantImage from "../../../core-Legado/features/userRestaurantRate/Assets/restImage.png";
import { getAverageRating, getStoredRatings, saveRating } from "../../services/ratingStorage";
import { getRestaurantById } from "../../services/restaurantService";

export default function RestaurantRatePage() {
    const params = useParams();
    const restaurantId = Number(params?.id) || 1;

    const [restaurant, setRestaurant] = useState<Awaited<ReturnType<typeof getRestaurantById>>>();

    const [ratings, setRatings] = useState<{ stars: number; description: string }[]>([]);
    const [selectedStars, setSelectedStars] = useState(5);
    const [comment, setComment] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        async function loadRestaurant() {
            try {
                const loadedRestaurant =
                    (await getRestaurantById(restaurantId)) ??
                    (await getRestaurantById(1));
                setRestaurant(loadedRestaurant);
            } catch (loadError) {
                setError(loadError instanceof Error
                    ? loadError.message
                    : "Não foi possível carregar o restaurante.");
            }
        }

        void loadRestaurant();
    }, [restaurantId]);

    const restaurantRating = getAverageRating(
        ratings.map((rating) => ({
            stars: rating.stars,
            desc: rating.description,
        })),
    );

    useEffect(() => {
        async function loadRatings() {
            try {
                const storedRatings = await getStoredRatings(restaurantId);
                setRatings(storedRatings.map((rating) => ({
                    stars: rating.stars,
                    description: rating.desc,
                })));
            } catch (loadError) {
                setError(loadError instanceof Error
                    ? loadError.message
                    : "Não foi possível carregar as avaliações.");
            }
        }

        void loadRatings();
    }, [restaurantId]);

    if (!restaurant) {
        return <p className="p-8" role="status">Carregando restaurante...</p>;
    }

    async function submitRating(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedComment = comment.trim();
        if (!trimmedComment || isSaving) {
            return;
        }

        setIsSaving(true);
        setError(undefined);
        try {
            const updatedRatings = await saveRating(restaurantId, {
                stars: selectedStars,
                desc: trimmedComment,
            });
            setRatings(updatedRatings.map((rating) => ({
                stars: rating.stars,
                description: rating.desc,
            })));
            setComment("");
            setSelectedStars(5);
            setIsDialogOpen(false);
        } catch (saveError) {
            setError(saveError instanceof Error
                ? saveError.message
                : "Não foi possível salvar a avaliação.");
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <div className="flex min-h-screen flex-col bg-brand-bg text-brand-text">
            <main className="flex flex-1 flex-col justify-between pb-16 min-[951px]:flex-row">
                <section className="flex flex-1 flex-col items-start gap-3 px-4 pt-7 sm:px-[5vw] min-[951px]:px-[5vw]">
                    <div className="flex items-center">
                        <Link
                            href={`/restaurants/${restaurantId}`}
                            aria-label="Voltar para o cardápio"
                            className="flex h-[clamp(24px,5vw,48px)] w-[clamp(24px,5vw,48px)] shrink-0 bg-brand-accent transition-transform hover:scale-105"
                            style={{
                                mask: "url('/designSystem/assets/chevron.left.circle.svg') center / contain no-repeat",
                                WebkitMask:
                                    "url('/designSystem/assets/chevron.left.circle.svg') center / contain no-repeat",
                            }}
                        />
                        <h1 className="pl-2 text-[clamp(24px,5vw,48px)] font-normal">
                            {restaurant.name}
                        </h1>
                    </div>

                    <h2 className="pl-12 text-[clamp(24px,5vw,48px)] font-normal">
                        Avaliação
                    </h2>

                    <div
                        className="ml-12 flex min-h-8 items-center gap-1"
                        aria-label={`Média de ${restaurantRating.toFixed(1).replace(".", ",")} de 5`}
                    >
                        {Array.from({ length: Math.round(restaurantRating) }, (_, index) => (
                            <span
                                key={index}
                                aria-hidden="true"
                                className="h-7 w-7 bg-brand-accent"
                                style={{
                                    mask: "url('/designSystem/assets/star.fill.svg') center / contain no-repeat",
                                    WebkitMask:
                                        "url('/designSystem/assets/star.fill.svg') center / contain no-repeat",
                                }}
                            />
                        ))}
                        <span className="ml-2 inline-flex min-h-8 items-center rounded-lg border border-[#6d6d6d] bg-white px-2 text-base font-semibold">
                            {restaurantRating.toFixed(1).replace(".", ",")}/5
                        </span>
                    </div>
                    {error && (
                        <p role="alert" className="ml-12 text-red-700">
                            {error}
                        </p>
                    )}

                    <button
                        type="button"
                        onClick={() => setIsDialogOpen(true)}
                        className="mx-12 mt-3 h-12 w-[calc(100%-6rem)] max-w-[370px] rounded-lg bg-brand-button px-4 text-lg text-white transition-transform hover:scale-[1.02]"
                    >
                        Avaliação
                    </button>

                    <div className="mx-12 flex w-[calc(100%-6rem)] flex-col gap-5">
                        {ratings.map((rating, index) => (
                            <article
                                key={`${rating.description}-${index}`}
                                className="min-h-[202px] rounded-lg bg-white p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                            >
                                <span
                                    role="img"
                                    aria-label="Imagem de perfil"
                                    className="block h-12 w-12 bg-brand-accent"
                                    style={{
                                        mask: "url('/designSystem/assets/person.crop.circle.svg') center / contain no-repeat",
                                        WebkitMask:
                                            "url('/designSystem/assets/person.crop.circle.svg') center / contain no-repeat",
                                    }}
                                />
                                <div className="flex gap-1 pt-2">
                                    {Array.from({ length: rating.stars }, (_, starIndex) => (
                                        <span
                                            key={starIndex}
                                            aria-hidden="true"
                                            className="h-6 w-6 bg-brand-accent"
                                            style={{
                                                mask: "url('/designSystem/assets/star.fill.svg') center / contain no-repeat",
                                                WebkitMask:
                                                    "url('/designSystem/assets/star.fill.svg') center / contain no-repeat",
                                            }}
                                        />
                                    ))}
                                </div>
                                <h3 className="my-2 text-xl font-normal">Avaliação</h3>
                                <p>{rating.description}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mx-4 mt-8 flex h-[500px] min-h-0 min-w-0 flex-none flex-col overflow-hidden rounded-lg bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] sm:mx-[5vw] min-[951px]:mx-[5vw] min-[951px]:mt-[8vw]">
                    <Image
                        src="/designSystem/assets/images-2.jpeg"
                        alt={`Foto do restaurante ${restaurant.name}`}
                        width={800}
                        height={500}
                        className="h-[260px] w-full shrink-0 object-cover"
                    />
                    <div className="flex gap-3 overflow-x-auto p-4">
                        {(restaurant.restImages.length > 0
                            ? restaurant.restImages
                            : [restaurantImage]
                        ).map(
                            (image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Foto adicional do restaurante ${index + 1}`}
                                    width={160}
                                    height={112}
                                    className="h-[clamp(100px,12vw,140px)] w-[clamp(140px,18vw,190px)] min-w-[clamp(140px,18vw,190px)] rounded-lg object-cover"
                                />
                            ),
                        )}
                    </div>
                    <footer className="mt-auto flex flex-wrap justify-between gap-2 p-4 text-sm font-medium">
                        <p>{restaurant.name}</p>
                        <p>CNPJ: {restaurant.CNPJ}</p>
                        <p>Endereço: {restaurant.address}</p>
                    </footer>
                </section>
            </main>

            {isDialogOpen && (
                <div
                    className="fixed inset-0 z-20 flex items-center justify-center bg-black/35 p-4 backdrop-blur-sm"
                    role="presentation"
                    onClick={() => setIsDialogOpen(false)}
                >
                    <form
                        onSubmit={submitRating}
                        onClick={(event) => event.stopPropagation()}
                        className="flex w-full max-w-[480px] flex-col items-center gap-3 rounded-lg bg-white p-7 text-center text-xl"
                        aria-label="Avaliar restaurante"
                    >
                        <button
                            type="button"
                            onClick={() => setIsDialogOpen(false)}
                            aria-label="Fechar"
                            className="self-end text-2xl text-brand-accent"
                        >
                            ×
                        </button>
                        <h2 className="mb-2 text-2xl font-semibold">
                            Avaliar restaurante
                        </h2>
                        <div className="flex gap-1" role="group" aria-label="Escolha a nota">
                            {Array.from({ length: 5 }, (_, index) => {
                                const star = index + 1;
                                return (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setSelectedStars(star)}
                                        aria-label={`${star} estrela${star > 1 ? "s" : ""}`}
                                        aria-pressed={star <= selectedStars}
                                        className={`h-9 w-9 bg-brand-accent ${
                                            star <= selectedStars ? "opacity-100" : "opacity-35"
                                        }`}
                                        style={{
                                            mask: "url('/designSystem/assets/star.fill.svg') center / contain no-repeat",
                                            WebkitMask:
                                                "url('/designSystem/assets/star.fill.svg') center / contain no-repeat",
                                        }}
                                    />
                                );
                            })}
                        </div>
                        <label className="self-start text-left" htmlFor="ratingComment">
                            Comentário
                        </label>
                        <textarea
                            id="ratingComment"
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                            placeholder="Conte o que achou..."
                            rows={5}
                            required
                            className="w-full resize-y border border-[#6d6d6d] p-2 text-base"
                        />
                        <button
                            type="submit"
                            disabled={isSaving}
                            className="rounded-lg bg-brand-button px-16 py-2 text-base text-white disabled:opacity-50"
                        >
                            {isSaving ? "Salvando..." : "Avaliar"}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
