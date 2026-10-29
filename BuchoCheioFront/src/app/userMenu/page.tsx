import Image from "next/image";
import Link from "next/link";
import { Footer } from "../home/components/Footer";
import { Header } from "../home/components/Header";
import { getRestaurantById } from "../restaurants/services/restaurantService";
import { RestaurantRating } from "./components/RestaurantRating";

function DishCard({ title, description, price, image, highlight = false,}: {
    title: string;
    description: string;
    price: string;
    image: string;
    highlight?: boolean;
}) {
    return (
        <article
            className={`relative flex overflow-hidden rounded-lg bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${
                highlight
                    ? "min-h-[271px] min-w-[80vw] max-w-[355px] shrink-0 flex-col sm:min-w-[300px]"
                    : "min-h-[204px] w-full pr-[35%]"
            }`}
        >
            <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className={highlight ? "h-[140px] w-full shrink-0 object-cover" : "absolute right-0 top-0 h-full w-[35%] rounded-r-lg object-cover" }
            />
            <div
                className={
                    highlight
                        ? "flex min-w-0 flex-1 flex-col p-[15px_6px_0]"
                        : "flex min-w-0 flex-1 flex-col p-5"
                }
            >
                <h3 className="m-0 pb-3 text-[clamp(16px,3vw,24px)] text-brand-text">
                    {title}
                </h3>
                <p className="m-0 text-sm text-brand-text">{description}</p>
                <strong className="pt-[21px] text-[clamp(16px,3vw,24px)] font-normal text-brand-text">
                    {price}
                </strong>
            </div>
        </article>
    );
}

export default async function UserMenu({
    searchParams,
}: {
    searchParams: Promise<{ id?: string }>;
}) {
    const { id } = await searchParams;
    const restaurantId = Number(id) || 1;
    const restaurant = (await getRestaurantById(restaurantId)) ?? (await getRestaurantById(1));
    if (!restaurant) {
        return null;
    }
    const rating =
        restaurant.ratings.reduce((total, currentRating) => total + currentRating.stars, 0) /
        restaurant.ratings.length;
    const dishes = restaurant.dishes.map((dish) => ({
        title: dish.title,
        description: dish.desc,
        price: `R$ ${dish.price.toFixed(2).replace(".", ",")}`,
        image: dish.media[0] ?? "/designSystem/assets/images-2.jpeg",
    }));

    return (
        <div className="flex min-h-screen flex-col bg-brand-bg text-brand-text">
            <Header active="restaurantes" />
            <main className="flex w-full flex-1 flex-col">
                <section className="flex flex-col items-start gap-3 px-4 pt-7 sm:px-[5vw]">
                    <div className="flex w-full items-center">
                        <Link
                            href="/restaurants"
                            aria-label="Voltar para restaurantes"
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
                        <Link
                            href={`/userRestaurantRate?id=${restaurantId}`}
                            className="ml-auto mr-0 rounded-lg bg-brand-button px-4 py-2 text-center text-sm text-white transition-transform hover:scale-105 sm:mr-[8vw] sm:w-[160px]"
                        >
                            Avaliar
                        </Link>
                    </div>
                    <RestaurantRating
                        restaurantId={restaurantId}
                        initialRating={rating}
                    />
                </section>

                <section className="flex w-full flex-col gap-3 px-4 pt-7 sm:px-[5vw]">
                    <h2 className="text-[clamp(18px,3vw,24px)] font-normal">
                        Destaques
                    </h2>
                    <div className="flex w-full gap-5 overflow-x-auto pb-4">
                        {dishes.slice(0, 4).map((dish, index) => (
                            <DishCard
                                key={`${dish.title}-highlight-${index}`}
                                {...dish}
                                highlight
                            />
                        ))}
                    </div>
                </section>

                <section className="flex w-full flex-col gap-3 px-4 pb-16 pt-12 sm:px-[5vw]">
                    <h2 className="text-[clamp(18px,3vw,24px)] font-normal">
                        Cardápio
                    </h2>
                    <div className="grid w-full grid-cols-1 gap-[42px] min-[924px]:grid-cols-2">
                        {dishes.map((dish, index) => (
                            <DishCard key={`${dish.title}-${index}`} {...dish} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
