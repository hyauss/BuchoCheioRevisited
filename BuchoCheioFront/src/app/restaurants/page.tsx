import type { Metadata } from "next";
import { Footer } from "../home/components/Footer";
import { Header } from "../home/components/Header";
import { RestaurantCard } from "./components/RestaurantCard";
import { getRestaurants } from "./services/restaurantService";


export const metadata: Metadata = {
    title: "Restaurantes - Bucho Cheio",
    description: "Lista de restaurantes cadastrados no Bucho Cheio",
};

export default async function RestaurantsPage() {
    const restaurants = await getRestaurants();

    return (
        <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
            <Header active="restaurants" />
            <main className="flex flex-col flex-1 w-full max-w-7xl mx-auto px-4 md:px-[75px]">
                <section className="flex flex-col items-start w-full">
                    <h1 className="text-3xl md:text-[48px] font-bold py-[23px] leading-tight">
                        Restaurantes
                    </h1>
                </section>
                <section className="grid grid-cols-1 min-[924px]:grid-cols-2 gap-12 pb-[120px] md:pb-[309px] w-full items-stretch">
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </section>
            </main>
            <Footer />
        </div>
    );
}
