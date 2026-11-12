const JSON_SERVER_URL = process.env.JSON_SERVER_URL ?? "http://localhost:3001";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> },) {
    const { id } = await params;
    const restaurantId = Number(id);

    if (!Number.isInteger(restaurantId)) {
        return Response.json(
            { error: "O ID do restaurante deve ser um número inteiro." },
            { status: 400 },
        );
    }

    try {
        const response = await fetch(
            `${JSON_SERVER_URL}/restaurants/${restaurantId}`,
            { cache: "no-store" },
        );

        if (response.status === 404) {
            return Response.json(
                { error: "Restaurante não encontrado." },
                { status: 404 },
            );
        }

        if (!response.ok) {
            throw new Error(`JSON Server retornou ${response.status}.`);
        }

        return Response.json(await response.json());
    } catch {
        return Response.json(
            { error: "Não foi possível consultar o JSON Server." },
            { status: 502 },
        );
    }
}
