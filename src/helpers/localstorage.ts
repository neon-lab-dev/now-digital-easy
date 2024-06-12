export const getLocalStorage = <R>(key: string): R | null => {
  const item = localStorage.getItem(key);
  try {
    return item ? JSON.parse(item) : null;
  } catch (error) {
    return null;
  }
};

export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
