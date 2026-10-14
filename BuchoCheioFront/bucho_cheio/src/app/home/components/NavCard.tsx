import Image from "next/image";
import Link from "next/link";

interface NavCardProps {
    href: string;
    imageSrc: string;
    alt: string;
    label: string;
}

export function NavCard({ href, imageSrc, alt, label }: NavCardProps) {
    return (
        <article className="flex flex-col items-start">
            <Link href={href} className="block round-lg overflow-hidden bg-brand-button transition-transform duration-200 hover:scale-105 active:scale-100">
                <Image
                    className="w-[70vw] md:w-[18vw] h-auto rounded-lg pb-[1.2vh] md:pb-[1vh]"
                    src={imageSrc}
                    alt={alt}
                    width={300}
                    height={200}
                />
            </Link>
            <span className="text-[5.5vw] md:text-[1.7vw] font-light mt-2">{label}</span>
        </article>
    );
}