
interface CountryInfo{
  name: string;
  capital: string;
  population: number;
}

interface CountryDetailsProps {
  countryInfo?: CountryInfo;
  url:string;
}

//data => countryInfo prop
export default function CountryDetails(data:CountryDetailsProps) {
    return (
    <div>
      {data.countryInfo ? (
        <div>
            <h1>Country Name:{data.countryInfo.name}</h1>

            <h1>Country Capital:{data.countryInfo.capital}</h1>

            <h1>Country Population:{data.countryInfo.population}</h1>
        </div>
      ) : (
        <div>
            <h1>{data.url} Not Found</h1>
        </div>
      )} 
    </div>
  );
}
