import { Link, useLocation } from "wouter";
import { baseUrl, getBorders, getCurrencyName, getLanguages } from "../utils";
import useFetch from "../hooks/useFetch";
import LoadingMode from "./LoadingMode";
import { Country as CountryType } from "../types";
import { useMemo } from "react";

export default function Country() {
  const [location] = useLocation();

  const { data, error, loading } = useFetch<CountryType[]>({
    url: `${baseUrl}/name/${decodeURI(location)}?fullext=true`,
  });

  const result = data?.[0];

  const leftInfos = [
    { id: 1, key: "Native name", value: result?.name.common },
    { id: 3, key: "Population", value: result?.population.toLocaleString() },
    { id: 5, key: "Region", value: result?.region },
    { id: 7, key: "Sub Region", value: result?.subregion },
  ];

  const rightInfos = [
    { id: 2, key: "Top level domain", value: result?.tld?.[0] },
    { id: 4, key: "Currencies", value: getCurrencyName(result?.currencies) },
    {
      id: 6,
      key: "Languages",
      value: getLanguages(result?.languages),
    },
  ];

  const borders = useMemo(() => getBorders(result?.borders), [result]);

  return (
    <>
      <div className="px-7 md:px-16">
        <Link to="/">
          <button className="bg-white dark:bg-dark-blue py-2 px-10 shadow-md hover:shadow-lg dark:text-white dark:shadow-slate-800 rounded-lg">
            &larr; Back
          </button>
        </Link>
        {!loading && (
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <img
                  src={result?.flags.png}
                  alt={result?.flags.alt}
                  className="w-[100%] md:w-[80%] max-h-[23rem] object-contain"
                  loading="eager"
                />
              </div>
              <div className="my-auto dark:text-white text-black">
                <p className="font-bold text-2xl mb-10">{result?.name.common}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  <div>
                    {leftInfos.map((info) => (
                      <CountryInfo key={info.id} name={info.key} value={info.value} />
                    ))}
                    <div className="flex dark:text-white text-black mt-1">
                      <p className="font-semibold">Capital</p>: &nbsp;
                      <p>{result?.capital}</p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0">
                    {rightInfos.map((info) => (
                      <CountryInfo key={info.id} name={info.key} value={info.value} />
                    ))}
                  </div>
                </div>
                {borders.length ? (
                  <div className="flex gap-4 dark:text-white text-black mt-10 md:items-center flex-col md:flex-row items-start">
                    <p className="font-semibold whitespace-nowrap self-start mt-2">
                      Border countries: &nbsp;
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      {borders.map((border) => (
                        <div className="shadow-md py-1 px-5 border border-1 dark:border-slate-800">{border}</div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )}
      </div>
      <LoadingMode loading={loading} error={error} />
    </>
  );
}

const CountryInfo = ({ name, value }: { name: string; value: string | undefined }) => {
  return (
    <div className="flex">
      <p className="font-semibold">{name}</p>: &nbsp;
      <p>{value}</p>
    </div>
  );
};
