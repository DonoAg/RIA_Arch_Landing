# RIA Arch Landing

Marketing landing page shell for the RIA Arch consulting offering, built with:

- Vite + React + TypeScript
- Tailwind CSS
- Lucide React icons

## Local development

```bash
npm install
npm run dev
```

## Build and quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## GitHub Pages deployment (main branch)

This repo includes a workflow at `.github/workflows/deploy.yml` that:

1. Runs on pushes to `main`
2. Installs dependencies with `npm ci`
3. Builds the site
4. Deploys `dist/` to GitHub Pages

### Configure Pages in GitHub

1. In the repository settings, open **Pages**.
2. Set **Build and deployment** source to **GitHub Actions**.
3. Push to `main` to trigger deployment.

### Custom domain placeholder steps

When you are ready to point a custom domain:

1. Add DNS records at your domain provider pointing to GitHub Pages.
2. Set the custom domain in **Repository Settings > Pages**.
3. Optional: add a `CNAME` file in `public/` containing your domain.

## Dockerized deployment option

The project includes:

- A multi-stage `Dockerfile` for portable image builds
- A `docker-compose.yml` for quick local run/deployment

- **Build stage:** Node builds static assets
- **Runtime stage:** Nginx serves the generated `dist/` output

### Build image

```bash
docker build -t ria-arch-landing .
```

### Run container

```bash
docker run --rm -p 8080:80 ria-arch-landing
```

Then open `http://localhost:8080`.

### Run with Docker Compose

```bash
docker compose up --build -d
```

Stop it with:

```bash
docker compose down
```
