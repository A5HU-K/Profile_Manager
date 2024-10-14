const speakeasy = require('speakeasy');

class TwoFactorService {
  static generateSecret() {
    return speakeasy.generateSecret({ length: 32 });
  }

  static verifyToken(secret, token) {
    return speakeasy.totp.verify({
      secret: secret,
      encoding: 'base32',
      token: token
    });
  }
}

module.exports = TwoFactorService;