export const validateProfileData = (name, email) => {
  if (!name || !email) {
    return "Name and email are required.";
  }
  return "";
};

export const validatePasswordReset = (newPassword, confirmPassword) => {
  if (newPassword !== confirmPassword) {
    return "Passwords do not match.";
  }
  return "";
};
