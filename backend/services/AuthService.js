const User = require("../models/User");
const { AppError } = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");

class AuthService {
  static async registerUser(userData) {
    const user = await User.create(userData);
    return this.generateToken(user);
  }

  static async loginUser(email, password) {
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      throw new AppError("Incorrect email or password", 401);
    }
    return this.generateToken(user);
  }

  static generateToken(user) {
    return jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
        algorithm: "HS256", // specify the algorithm
      } // secret key
    );
  }
}

module.exports = AuthService;
