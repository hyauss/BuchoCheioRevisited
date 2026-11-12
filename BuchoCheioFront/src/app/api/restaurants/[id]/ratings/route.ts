import { Rating } from "../../../../restaurants/models/restaurant";

const JSON_SERVER_URL = process.env.JSON_SERVER_URL ?? "http://localhost:3001";

type JsonServerRating = Rating & {
    id: number;
    restaurantId: number;
};

type RouteContext = {
    params: Promise<{ id: string }>;
};

function parseRestaurantId(value: string): number | undefined {
    const id = Number(value);
    return Number.isInteger(id) && id > 0 ? id : undefined;
}

function isRating(value: unknown): value is Rating {
    if (!value || typeof value !== "object") {
        return false;
    }

    const rating = value as Record<string, unknown>;
    return (
        typeof rating.stars === "number" &&
        Number.isInteger(rating.stars) &&
        rating.stars >= 1 &&
        rating.stars <= 5 &&
        typeof rating.desc === "string" &&
        rating.desc.trim().length > 0
    );
}

async function getJsonServerRatings(restaurantId: number) {
    const response = await fetch(
        `${JSON_SERVER_URL}/ratings?restaurantId=${restaurantId}`,
        { cache: "no-store" },
    );

    if (!response.ok) {
        throw new Error(`JSON Server retornou ${response.status}.`);
    }

    const ratings = (await response.json()) as JsonServerRating[];
    return ratings.map(({ stars, desc }) => ({ stars, desc }));
}

export async function GET(_: Request, { params }: RouteContext) {
    const restaurantId = parseRestaurantId((await params).id);
    if (!restaurantId) {
        return Response.json({ error: "ID de restaurante inválido." }, { status: 400 });
    }

    try {
        return Response.json(await getJsonServerRatings(restaurantId));
    } catch {
        return Response.json(
            { error: "Não foi possível consultar o JSON Server." },
            { status: 502 },
        );
    }
}

export async function POST(request: Request, { params }: RouteContext) {
    const restaurantId = parseRestaurantId((await params).id);
    if (!restaurantId) {
        return Response.json({ error: "ID de restaurante inválido." }, { status: 400 });
    }

    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Corpo da requisição inválido." }, { status: 400 });
    }

    if (!isRating(body)) {
        return Response.json({ error: "Avaliação inválida." }, { status: 400 });
    }

    try {
        const response = await fetch(`${JSON_SERVER_URL}/ratings`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                restaurantId,
                stars: body.stars,
                desc: body.desc.trim(),
            }),
        });

        if (!response.ok) {
            throw new Error(`JSON Server retornou ${response.status}.`);
        }

        return Response.json(await getJsonServerRatings(restaurantId), { status: 201 });
    } catch {
        return Response.json(
            { error: "Não foi possível salvar a avaliação no JSON Server." },
            { status: 502 },
        );
    }
}
