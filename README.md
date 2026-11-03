<div align="center">

# Bucho-Cheio Revisited

[![Java](https://img.shields.io/badge/Java-17%2B-ED8B00?logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3-6DB33F?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Next.js](https://img.shields.io/badge/Next.js-14%2B-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15%2B-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Modernized full-stack web platform connecting restaurants and community members to provide quality meals at symbolic prices, promoting food security and sustainable cities (UN SDGs 2, 3, 11).

</div>

## Table of Contents

- [About](#about)
- [UN Sustainable Development Goals](#un-sustainable-development-goals)
- [Features](#features)
- [Screenshots](#screenshots)
- [Architecture & UML](#architecture--uml)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Team](#team)
- [License](#license)

## About

**Bucho-Cheio Revisited** is an evolution of the Bucho-Cheio initiative. The project was designed around democratizing access to nutritious food while creating sustainable incentives for restaurants.

In partnership with local governments and city totems, participating restaurants provide solidarity meals for a symbolic price. In return, businesses gain community visibility and marketing credits on municipal digital totems proportional to their solidarity contribution.

This version features a modernized **Next.js 14** front-end utilizing React Server Components and Tailwind CSS, coupled with a robust **Spring Boot** RESTful microservice and PostgreSQL database.

## UN Sustainable Development Goals

The project aligns directly with the United Nations 2030 Agenda:
- **ODS 2 — Fome Zero e Agricultura Sustentável:** Eradicating hunger and ensuring access to safe, nutritious food.
- **ODS 3 — Saúde e Bem-Estar:** Promoting good health and dignified nutrition for vulnerable citizens.
- **ODS 11 — Cidades e Comunidades Sustentáveis:** Making cities inclusive, resilient, and socially collaborative.

## Features

- **Restaurant Directory & Search:** Discover nearby restaurants participating in the solidarity meal initiative.
- **Dynamic Menus & Daily Quotas:** Real-time visibility into available solidarity dishes, ingredients, and pickup hours.
- **Meal & Service Rating System:** Community-driven rating mechanism allowing users to leave reviews and ensure meal quality.
- **Modern Responsive Web UI:** Next.js 14 with Tailwind CSS providing high accessibility across desktop and mobile.
- **UML & Software Engineering Specification:** Complete class, sequence, and use case diagrams.

## Screenshots

| Home Page | Restaurants Directory | Menu & Plate View |
| :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/a1733480-dd5d-485d-b4b3-f0f54c716d1e" width="260" alt="Home Screen"/> | <img src="https://github.com/user-attachments/assets/0f6bffb0-dc3c-4ee6-a1c0-f4cd8a7760c8" width="260" alt="Restaurants Directory"/> | <img src="https://github.com/user-attachments/assets/bc0ba330-9a7b-4cfc-9bff-d3d410529bf1" width="260" alt="Menu View"/> |

| Rating Dialog | Evaluation Feedback |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/d4a1fde1-104f-47a3-ba2e-4185661f4d9e" width="380" alt="Rating Dialog"/> | <img src="https://github.com/user-attachments/assets/bb907c66-aba5-4fab-ba54-dcd1047a4403" width="380" alt="Evaluation Feedback"/> |

## Architecture & UML

Comprehensive software engineering models are available under `UML/`:
- **Use Cases:** [`UML/CasosDeUso/CasosDeUso.puml`](UML/CasosDeUso/CasosDeUso.puml)
- **Sequence Diagrams:**
  - [Restaurant Registration](UML/DiagramasDeSequencia/CadastroDeRestaurantes.plantuml)
  - [Menu Update](UML/DiagramasDeSequencia/AtualizarCardapio.plantuml)
  - [Restaurant Evaluation](UML/DiagramasDeSequencia/AvaliarRestaurante.plantuml)
  - [Report Generation](UML/DiagramasDeSequencia/ObterRelatorio.plantuml)
- **Class Diagrams:** [`UML/DiagramaDeClasses/ClassesCompleto.puml`](UML/DiagramaDeClasses/ClassesCompleto.puml)

## Built With

- **Backend:** Java 17, Spring Boot 3, Spring Data JPA, Maven
- **Database:** PostgreSQL
- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Ideation & Architecture:** PlantUML

## Getting Started

### Requirements

- Java 17 or later
- Maven 3.8+
- Node.js 18+ and npm
- PostgreSQL 15+

### Database Setup

Configure your PostgreSQL database matching `BuchoCheio/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/buchocheio
spring.datasource.username=postgres
spring.datasource.password=BuchoCheio123!!
```

### Running Backend

```bash
cd BuchoCheio
./mvnw spring-boot:run
```
API runs on `http://localhost:8080`.

### Running Frontend

```bash
cd BuchoCheioFront
npm install
npm run dev
```
Next.js client runs on `http://localhost:3000`.

## Project Structure

```
BuchoCheioRevisited/
├── BuchoCheio/                 Spring Boot 3 REST Backend
│   ├── src/main/java/          Controllers, Models, Services, and Repositories
│   ├── src/main/resources/     application.properties configuration
│   └── pom.xml                 Maven build file
├── BuchoCheioFront/            Next.js 14 Frontend
│   ├── src/                    Pages, components, styles, and layouts
│   ├── postcss.config.mjs      Tailwind PostCSS configuration
│   └── package.json            Dependencies and scripts
├── UML/                        PlantUML architectural diagrams
└── TUTORIAL.md                 Ideation notes, ODS descriptions, and UI screenshots
```

## Team

<div align="center">
  <table>
    <tr>
      <td align="center" width="25%">
        <a href="https://github.com/hyauss"><img src="https://github.com/hyauss.png" width="90" alt="Vinicius Marques"/></a>
        <br/><sub><b>Vinicius Marques</b></sub><br/><br/>
        <a href="https://github.com/hyauss"><img src="https://skillicons.dev/icons?i=github" alt="GitHub"/></a>
        <a href="https://www.linkedin.com/in/vinicius-marques-966918274/"><img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn"/></a>
      </td>
      <td align="center" width="25%">
        <a href="https://github.com/LosadaT"><img src="https://github.com/LosadaT.png" width="90" alt="Francisco Totaro"/></a>
        <br/><sub><b>Francisco Totaro</b></sub><br/><br/>
        <a href="https://github.com/LosadaT"><img src="https://skillicons.dev/icons?i=github" alt="GitHub"/></a>
      </td>
    </tr>
  </table>
</div>

## License

Released under the [MIT License](LICENSE). Copyright (c) 2026 Vinicius Marques and Francisco Totaro.
