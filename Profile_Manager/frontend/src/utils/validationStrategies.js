export const emailStrategy = {
  validate: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? "" : "Invalid email format";
  },
};

export const passwordStrategy = {
  validate: (password) => {
    return password.length >= 6
      ? ""
      : "Password must be at least 6 characters long";
  },
};
