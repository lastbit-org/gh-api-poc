# app-api-poc

API simples com Fastify.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Produção

```bash
npm start
```

## Docker

```bash
docker build -t app-api-poc .
docker run -p 3000:3000 app-api-poc
```

## Endpoints

- `GET /` - Status da API
- `GET /health` - Health check

## GitHub Actions

O pipeline em `.github/workflows/docker-build-push.yml`:

- **Push** em `main`/`master`: faz build e push para o GitHub Container Registry (`ghcr.io`)
- **Pull Request**: apenas faz build (sem push)

### Usar outro Artifact Registry

Quando criar seu registry (GCP Artifact Registry, AWS ECR, Azure ACR), ajuste o workflow:

1. Adicione os secrets necessários no GitHub (ex: `REGISTRY_USERNAME`, `REGISTRY_PASSWORD`)
2. Altere `env.REGISTRY` e o step de login
3. Atualize a imagem em `docker/metadata-action`
