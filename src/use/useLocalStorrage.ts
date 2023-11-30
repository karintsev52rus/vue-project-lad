export const useLocalStorrage = <T>(key: string) => {
  const json = localStorage.getItem(key);
  if (json) {
    return JSON.parse(json) as T;
  } else return null;
};
