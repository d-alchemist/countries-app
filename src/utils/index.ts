import { Country, Currencies, Languages } from "../types";

export const baseUrl = "https://restcountries.com/v3.1";

export const getCurrencyName = (result: Currencies | undefined) => {
  if (result) {
    const val = Object.values(result)[0];
    return val.name;
  }
}

export const getLanguages = (result: Languages | undefined) => {
  const lang: string[] = [];
  for (let res in result) {
    lang.push(result[res]);
  }
  return lang.join(", ");
}

export const getBorders = (result: Country["borders"] | undefined) => {
  if (result) {
    const region = new Intl.DisplayNames(['en'], { type: 'region' });
    
    const data = result?.map((country) => region.of(country.substring(0, 2) || ""));
  
    return data;
  }
  return [];
}