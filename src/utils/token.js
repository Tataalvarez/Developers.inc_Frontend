import { TOKEN } from './constants';
import jwtDecode from 'jwt-decode';

export function setToken(token){
  sessionStorage.setItem(TOKEN, token);
}

export function getToken() {
  return sessionStorage.getItem(TOKEN);
}

export function decodeToken(token) {
  return jwtDecode(token);
}

export function removeToken() {
  return sessionStorage.removeItem(TOKEN);
}