const { Redis } = require('@upstash/redis');

const redis = Redis.fromEnv();

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  const { city } = req.query;
  const votes = (await redis.hgetall(`votes:${city}`)) ?? {};
  res.json(votes);
};
