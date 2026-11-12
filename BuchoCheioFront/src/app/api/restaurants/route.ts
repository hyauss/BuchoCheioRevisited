const JSON_SERVER_URL = process.env.JSON_SERVER_URL ?? "http://localhost:3001";

export async function GET() {
    try {
        const response = await fetch(`${JSON_SERVER_URL}/restaurants`, {
            cache: "no-store",
        });

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
