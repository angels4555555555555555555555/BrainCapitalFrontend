# Brain Capital frontend

Next.js customer and admin application integrated with the Brain Capital Express API.

## Local setup

1. Start the backend on port `5000`.
2. Copy `.env.example` to `.env.local`. The default local API value is `http://localhost:5000/api`.
3. Install and start:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Customer login is at `/login`; admin login is at `/login/admin`.

## Production

Set `NEXT_PUBLIC_API_URL` to the public backend URL including `/api`, then run:

```bash
npm run build
npm start
```

The backend must allow the frontend origin through `CORS_ORIGINS`. Authentication uses HTTP-only cookies, so both services must use HTTPS in production.
