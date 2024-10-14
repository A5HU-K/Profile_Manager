import * as api from "../services/api";

export const LoginCommand = {
  execute: async (email, password) => {
    const response = await api.login(email, password);
    return response.data;
  },
};

export const RegisterCommand = {
  execute: async (name, email, password) => {
    const response = await api.register(name, email, password);
    return response.data;
  },
};
