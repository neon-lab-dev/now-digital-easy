import { ICurrency } from "@/services/currency";

export const setCurrencyToLocalStorage = (currency: ICurrency) => {
  localStorage.setItem("currency", JSON.stringify(currency));
};

export const getCurrencyFromLocalStorage = (): ICurrency | null => {
  const currency = localStorage.getItem("currency");
  try {
    return currency ? JSON.parse(currency) : null;
  } catch (error) {
    return null;
  }
};
