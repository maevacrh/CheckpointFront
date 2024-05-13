import { Country } from "@/types";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const GET_COUNTRY = gql` 
query Country($code: String!) {
  country(code: $code) {
    id
    code
    name
    emoji
    continent {
      id
      name
    }
  }

}
`;

export default function CountryDetail() {
    const [country, setCountry] = useState<Country>();
    const router = useRouter();
    const id = router.query.id;

    const { loading, error, data } = useQuery(GET_COUNTRY, {
        variables: { code: id },
        onCompleted: (data) => {
            setCountry(data.country);
        },
    });

    return (
        <div>
            {country && (
                <div className="flex  flex-col md:flex-row items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <p className=" text-9xl md:text-[15rem]">{country.emoji}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold">{country.name} ( {country.code} )</h1>
                        {country.continent && (
                            <p className="text-xl">Continent : {country.continent.name}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
