import Link from "next/link";

export type HeaderActiveTab =
    | "home"
    | "restaurants"
    | "cadastrar"
    | "relatorios"
    | "meus-restaurantes";

interface HeaderProps {
    active?: HeaderActiveTab | string;
}

export function Header({ active }: HeaderProps) {
    const getLinkClasses = (tabName: HeaderActiveTab, extraClasses = "") => {
        const isActive = active === tabName;
        return `text-[clamp(13px,1.2vw,16px)] text-brand-text bg-transparent transition-transform duration-200 hover:scale-105 active:scale-100 pb-0.5 ${
            isActive ? "border-b-2 border-brand-button" : "border-b-2 border-transparent"
        } ${extraClasses}`.trim();
    };

    return (
        <header className="flex flex-row items-center w-full box-border gap-[clamp(8px,1.2vw,16px)] pt-[clamp(12px,2vh,20px)] px-[clamp(16px,2.5vw,32px)]">
            {/* Brand / Logo */}
            <Link
                href="/home"
                aria-label="Ir para Home"
                className="bg-transparent transition-transform duration-200 hover:scale-105 active:scale-100"
            >
                <span
                    className="block bg-brand-accent w-[clamp(36px,3.5vw,48px)] h-[clamp(35px,3.4vw,47px)]"
                    role="img"
                    aria-label="Imagem contendo um garfo e uma faca."
                    style={{
                        mask: "url('/designSystem/assets/fork.knife.circle.svg') center / contain no-repeat",
                        WebkitMask:
                            "url('/designSystem/assets/fork.knife.circle.svg') center / contain no-repeat",
                    }}
                />
            </Link>

            {/* Navegação */}
            <Link
                href="/home"
                aria-label="Home"
                className={getLinkClasses("home")}
            >
                Home
            </Link>

            <Link
                href="/restaurants"
                aria-label="Restaurantes"
                className={getLinkClasses("restaurants", "hidden md:block")}
            >
                Resturantes
            </Link>

            <button
                type="button"
                aria-label="Cadastrar"
                className={getLinkClasses("cadastrar")}
            >
                Cadastrar
            </button>

            <button
                type="button"
                aria-label="Relatórios"
                className={getLinkClasses("relatorios")}
            >
                Relatórios
            </button>

            <button
                type="button"
                aria-label="Meus restaurantes"
                className={getLinkClasses("meus-restaurantes")}
            >
                Meus restaurantes
            </button>

            {/* Perfil */}
            <button
                type="button"
                aria-label="Perfil"
                className="ml-auto bg-transparent transition-transform duration-200 hover:scale-105 active:scale-100"
            >
                <span
                    className="block bg-brand-accent w-[clamp(36px,3.5vw,48px)] h-[clamp(35px,3.4vw,47px)]"
                    role="img"
                    aria-label="Imagem de perfil"
                    style={{
                        mask: "url('/designSystem/assets/person.crop.circle.svg') center / contain no-repeat",
                        WebkitMask:
                            "url('/designSystem/assets/person.crop.circle.svg') center / contain no-repeat",
                    }}
                />
            </button>
        </header>
    );
}

export default Header;
