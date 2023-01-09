export const validateEmail = (email: string) => {
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string) => password.length >= 8;
