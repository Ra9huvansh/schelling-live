require('dotenv').config();
const express = require('express');
const { Redis } = require('@upstash/redis');

const app = express();
const redis = Redis.fromEnv();

app.use(express.json());
app.use(express.static(__dirname, { etag: false, lastModified: false, setHeaders: res => res.setHeader('Cache-Control', 'no-store') }));

app.get('/api/votes/:city', async (req, res) => {
  const votes = (await redis.hgetall(`votes:${req.params.city}`)) ?? {};
  res.json(votes);
});

app.post('/api/vote', async (req, res) => {
  const { city, location } = req.body;
  if (!city || !location) return res.status(400).json({ error: 'city and location required' });

  await redis.hincrby(`votes:${city}`, location, 1);
  const votes = (await redis.hgetall(`votes:${city}`)) ?? {};
  res.json(votes);
});

app.listen(3000, () => console.log('http://localhost:3000'));
