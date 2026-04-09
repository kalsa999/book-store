# Book Store

Une application web full-stack pour gérer des livres et des catégories, avec authentification via Keycloak.

## Stack technique

| Couche | Technologie |
|---|---|
| Frontend | React 19, Vite, React Router, Axios |
| Backend | Node.js, Express 5, Mongoose |
| Base de données | MongoDB |
| Authentification | Keycloak 25 |
| DevOps | Docker Compose |

## Structure du projet

```
Book-Store/
├── BackEnd/        # API REST Express
├── FrontEnd/       # Application React
└── docker-compose.yaml
```

## Prérequis

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) & Docker Compose

## Démarrage

### 1. Lancer l'infrastructure (MongoDB + Keycloak)

```bash
docker compose up -d
```

| Service | URL |
|---|---|
| MongoDB | `mongodb://localhost:27017` |
| Mongo Express (interface DB) | http://localhost:8081 |
| Keycloak (Admin : `admin` / `admin`) | http://localhost:8080 |

### 2. Lancer le Backend

```bash
cd BackEnd
npm install
npm run dev
```

L'API tourne sur **http://localhost:3000** (ou le port défini dans votre `.env`).

### 3. Lancer le Frontend

```bash
cd FrontEnd
npm install
npm run dev
```

L'application tourne sur **http://localhost:5173**.

## Endpoints API

| Méthode | Route | Description |
|---|---|---|
| GET | `/books` | Lister tous les livres |
| POST | `/books` | Ajouter un livre |
| PUT | `/books/:id` | Modifier un livre |
| DELETE | `/books/:id` | Supprimer un livre |
| GET | `/categories` | Lister toutes les catégories |
| POST | `/categories` | Ajouter une catégorie |

## Variables d'environnement

Créer un fichier `.env` dans `BackEnd/` :

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/bookstore
KEYCLOAK_URL=http://localhost:8080
KEYCLOAK_REALM=votre-realm
```

