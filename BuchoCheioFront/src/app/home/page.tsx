import type { Metadata } from "next";
import { NavCard } from "./components/NavCard";

export const metadata: Metadata = {
  title: "Home - Bucho Cheio",
  description: "Sistema de consulta e avaliação de restaurantes",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-brand-bg  text-brand-text">
      <section className="flex flex-col items-start w-full max-w-[85vw] md:max-w-[60vw] pt-[10vh] md:pt-[12vh] pb-[5vh] md:pb-[7vh]">
        <h1 className="text-[9.5vw] md:text-[4.5vw] pb-[1.2vh] md:pb-[1vh] font-bold">Bucho Cheio</h1>
        <p className="text pText">Esse sistema permite que usuários consultem, avaliem e obtenham relatórios sobre os restaurantes e que os restaurantes cadastrem e atualizem seus cardapios</p>
      </section>
      <section className="navigationSection">
        <NavCard href="/restaurantes" imageSrc="designSystem/assets/consultarRestaurantes.svg" alt="Garfo e faca" label="Consultar restaurantes" />
        <NavCard href="/cadastrar" imageSrc="designSystem/assets/cadastrarRestaurantes.svg" alt="Mais" label="Cadastrar Restaurantes" />
        <NavCard href="/relatorios" imageSrc="designSystem/assets/obterRelatorio.svg" alt="Mapa" label="Obter Relatórios" />
      </section>
    </main>
  );
}
