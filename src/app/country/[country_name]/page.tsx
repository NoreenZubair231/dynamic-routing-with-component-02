
import "@/app/globals.css";
import Country from "@/app/components/Country";

// Importing NextPage type
import { NextPage } from 'next';

interface Params {
  params: {
    country_name: string;
  };
}

// Use NextPage with custom props
const CountryName: NextPage<Params> = ({ params }) => {
  const countries: {
    name: string;
    capital: string;
    population: number;
  }[] = [
    { name: "Pakistan", capital: "Islamabad", population: 252536368 },
    { name: "India", capital: "Delhi", population: 1455097350 },
    { name: "Japan", capital: "Tokyo", population: 123452377 },
    { name: "Saudia", capital: "Riyadh", population: 34156175 },
    { name: "Turkey", capital: "Ankara", population: 85372377 },
  ];

  function findCountry(name: string): { name: string; capital: string; population: number } | undefined {
    return countries.find((country) => name.toLowerCase() === country.name.toLowerCase());
  }

  const result = findCountry(params.country_name);

  return (
    <div>
      <Country countryInfo={result} url={params.country_name} />
    </div>
  );
};

export default CountryName;

