const validator = require("validator");

const sanitizeInput = (obj) => {
  const sanitized = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      sanitized[key] = validator.escape(value);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
};

module.exports = (req, res, next) => {
  req.body = sanitizeInput(req.body);
  req.query = sanitizeInput(req.query);
  req.params = sanitizeInput(req.params);
  next();
};
