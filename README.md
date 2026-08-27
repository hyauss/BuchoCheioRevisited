# Bucho-Cheio
Web Service para restaurantes se organizarem para oferecerem pratos de comida feitos por um valor simbólico.

# Tutorial

[Informações complementares de ideação e preview - TUTORIAL.md](https://github.com/hyauss/BuchoCheioRevisited/blob/fix/readme/TUTORIAL.md)

# Instalação

Baixar o projeto e abrir no editor de código de preferência.
Baixar o banco de dados [PostGreSQL](https://www.postgresql.org/) e configurar o usuário e senha para ser igual ao presente no [application.properties](BuchoCheio/src/main/resources/application.properties) que a aplicação está consumindo, no exemplo username=postgres e password=BuchoCheio123!!.

# Utilização

Dentro da pasta [BuchoCheio](https://github.com/hyauss/Bucho-Cheio/tree/Dev/BuchoCheio)

Rode, para ligar o Servidor(BackEnd): mvn spring-boot:run

Dentro da pasta [BuchoCheioVuejs](https://github.com/hyauss/Bucho-Cheio/tree/Dev/BuchoCheioVuejs)

Rode, para ligar o Servidor na versão de desenvolvimento (FrontEnd): npm run build
Rode, para ligar o Servidor na versão de produção (FrontEnd): npm run dev
