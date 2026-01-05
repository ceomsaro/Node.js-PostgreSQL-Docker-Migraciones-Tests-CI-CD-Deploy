# 🚀 Node DevOps Platform

Una API profesional de gestión de tareas diseñada bajo principios **DevOps**: automatización, seguridad y observabilidad.

## 🏗️ Arquitectura del Sistema
```mermaid
graph TD
    User -->|HTTP| API[Node.js Express API]
    API -->|Verifica| DB_Check{Postgres Ready?}
    DB_Check -->|No| Wait[Retry 1s]
    DB_Check -->|Si| Migrations[Run SQL Migrations]
    Migrations -->|Success| Server[App Started]
    Server -->|Persistencia| DB[(PostgreSQL)]
🛠️ Stack Tecnológico
Backend: Node.js & Express.

Base de Datos: PostgreSQL.

Infraestructura: Docker & Docker Compose.

CI/CD: GitHub Actions.

Testing: Jest & Supertest.

🌟 Características DevOps
Migraciones Automáticas: Script de entrada que espera a la DB y ejecuta esquemas SQL (psql).

Seguridad (Hardening): El contenedor corre bajo un usuario no-root (node).

Healthchecks: Endpoint /health que valida la conectividad interna con la base de datos.

Persistencia: Volúmenes Docker gestionados para evitar pérdida de datos.

CI Pipeline: Ejecución automática de tests en cada push a main.

🚀 Cómo empezar
Clonar el repo: git clone ...

Variables de entorno: Copia .env.example a .env y ajusta tus credenciales.

Levantar el entorno:

Bash

docker-compose up --build
🧪 Testing
Para ejecutar la suite de pruebas dentro del entorno orquestado:

Bash

docker-compose exec api npm test
🛡️ Seguridad
Este proyecto sigue las mejores prácticas de Docker:

Uso de imágenes Alpine (ligeras y con menor superficie de ataque).

Principio de Menor Privilegio (No-root user).

Gestión de secretos mediante variables de entorno (no hardcoded).