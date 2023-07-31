import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Country } from "../types";
import { baseUrl } from "../utils";
import LoadingMode from "./LoadingMode";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  const [srcUrl, setSrcUrl] = useState(`${baseUrl}/all`);
  const { data: countries, loading, error } = useFetch<Country[]>({ url: srcUrl });

  const [allCountries, setAllCountries] = useState<Country[] | null | undefined>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input) {
      const res = countries?.filter((country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase()),
      );
      setAllCountries(res);
    }
    if (!input) {
      setAllCountries(countries);
    }
  }, [input, countries]);

  const filterByRegion = (value: string) => {
    setSrcUrl(`${baseUrl}${value}`);
  };

  return (
    <>
      <LoadingMode loading={loading} error={error} />
      <div className="flex justify-between">
        <div>
          <label className="relative text-gray-400 dark:text-white focus-within:text-gray-600 block">
            <svg
              className="absolute left-3 top-3"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ transform: "msFilter" }}
            >
              <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
            <input
              className="py-3 pr-5 rounded-md bg-white dark:bg-dark-blue placeholder-gray-400 text-gray-500 appearance-none w-96 block pl-14 shadow-md focus-within:outline-none focus:outline-gray-200 dark:focus:outline-gray-600"
              placeholder="Search for a country..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </div>
        <div>
          <select
            className="py-2 px-7 bg-white dark:bg-dark-blue text-gray-500 dark:text-white shadow-md focus-within:outline-none"
            defaultValue="Filter by region"
            onChange={(e) => filterByRegion(e.target.value)}
          >
            <option>Filter by region</option>
            <option value="/region/africa">Africa</option>
            <option value="/region/america">America</option>
            <option value="/region/asia">Asia</option>
            <option value="/region/europe">Europe</option>
            <option value="/region/oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 xl:grid-cols-4">
        {allCountries?.map((country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </>
  );
}
