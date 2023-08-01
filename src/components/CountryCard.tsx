import { Link } from "wouter";
import { Country } from "../types";

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link to={`/${country.name.common}`} key={country.name.common}>
      <div className="shadow-md cursor-pointer">
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          width={500}
          className="max-h-40 min-h-fit object-fill min-w-full"
        />
        <div className="p-5 gap-5 mb-5">
          <p className="text-lg font-bold dark:text-white">{country.name.common}</p>
          <div className="flex gap-2 flex-col">
            <div className="flex mt-3 dark:text-white">
              <p className="font-semibold">Population:&nbsp;</p>
              <p>{country.population.toLocaleString()}</p>
            </div>
            <div className="flex dark:text-white">
              <p className="font-semibold">Region:&nbsp;</p>
              <p>{country.region}</p>
            </div>
            <div className="flex dark:text-white">
              <p className="font-semibold">Capital:&nbsp;</p>
              <p>{country.capital}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
