export const validateEmail = (email: string) => email.includes('@');

export const validatePassword = (password: string) => password.length >= 8;
