import { USER_ENDPOINT } from "../shared/constants";

export async function getUser() {
  try {
    const response = await fetch(USER_ENDPOINT);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    return null;
  }
}