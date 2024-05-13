
import CountryCard from "@/components/CountryCard";
import { Country } from "@/types";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";


const GET_ALL_COUNTRIES = gql`
query Countries {
  countries {
    id
    code
    name
    emoji
  }
}
`;
export default function Home() {
  const [countries, setCountries] = useState([]);
  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES, {
    onCompleted: (data) => {
      setCountries(data.countries);
    },
  });

  return (

    <div className=" px-2 md:px-10 py-3">

      <div className="flex flex-wrap gap-4 md:gap-10 justify-center items-center">

        {countries.map((country: Country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
    </div>
  );
}
