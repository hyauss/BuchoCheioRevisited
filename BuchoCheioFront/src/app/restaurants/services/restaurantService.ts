import { Restaurant } from "../models/restaurant";

const API_BASE_URL =
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

async function requestApi<T>(path: string): Promise<T> {
    const response = await fetch(new URL(path, API_BASE_URL), {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(
            `Falha ao consultar a API de restaurantes: ${response.status}`,
        );
    }

    return response.json() as Promise<T>;
}

export async function getRestaurants(): Promise<Restaurant[]> {
    return requestApi<Restaurant[]>("/api/restaurants");
}

export async function getRestaurantById(id: number): Promise<Restaurant | undefined> {
    const response = await fetch(
        new URL(`/api/restaurants/${id}`, API_BASE_URL),
        { cache: "no-store" },
    );

    if (response.status === 404) {
        return undefined;
    }

    if (!response.ok) {
        throw new Error(
            `Falha ao consultar o restaurante ${id}: ${response.status}`,
        );
    }

    return response.json() as Promise<Restaurant>;
}
