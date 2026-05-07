# schelling-live

A real-time Schelling focal point experiment. Pick where you'd meet a stranger in a city with no coordination, and see where the crowd converges.

## What is a Schelling focal point?

A Schelling focal point is a solution people converge on by default when they can't communicate. Thomas Schelling introduced this in 1960: given a city and a stranger, where do you go? People independently tend to pick the same "obvious" place, not because they agreed, but because certain locations are culturally salient.

## Stack

- **Frontend:** Vanilla HTML/CSS/JS (single file)
- **Backend:** Node.js + Express
- **Database:** Upstash Redis (vote persistence)
- **Hosting:** Vercel

## Running locally

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (see `.env.example`) and add your Upstash credentials:
   ```
   UPSTASH_REDIS_REST_URL=...
   UPSTASH_REDIS_REST_TOKEN=...
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. Open `http://localhost:3000`

## Deploying to Vercel

```bash
npx vercel
```

Add `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` as environment variables in the Vercel dashboard.

## Live

[schelling-live.vercel.app](https://schelling-live.vercel.app)
