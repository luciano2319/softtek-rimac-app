import { PLANS_ENDPOINT } from "../shared/constants";

export async function getPlans() {
  try {
    const response = await fetch(PLANS_ENDPOINT);
    const plans = await response.json();
    return plans;
  } catch (error) {
    console.error('Error al obtener los planes:', error);
    return null;
  }
}