const { Redis } = require('@upstash/redis');

const redis = Redis.fromEnv();

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { city, location } = req.body;
  if (!city || !location) return res.status(400).json({ error: 'city and location required' });

  await redis.hincrby(`votes:${city}`, location, 1);
  const votes = (await redis.hgetall(`votes:${city}`)) ?? {};
  res.json(votes);
};
