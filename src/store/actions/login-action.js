import { SET_LOGIN, SET_LOGOUT } from "../types/login-types";

export const setLogin = (data) => ({ type: SET_LOGIN, payload: data });

export const setLogout = () => ({ type: SET_LOGOUT });
