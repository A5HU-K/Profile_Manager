const redis = require("redis");
const client = redis.createClient();

class TokenBlacklistService {
  static async blacklistToken(token, exp) {
    const ttl = exp - Math.floor(Date.now() / 1000);
    await client.setex(token, ttl, "blacklisted");
  }

  static async isBlacklisted(token) {
    return (await client.get(token)) === "blacklisted";
  }
}

module.exports = TokenBlacklistService;
