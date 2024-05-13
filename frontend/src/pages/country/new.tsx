import CountryCard from "@/components/CountryCard";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_COUNTRY = gql`
 mutation Mutation($data: NewCountryInput!) {
  addCountry(data: $data) {
    code
    name
    emoji
    continent {
      name
    }
  }
}
`;
const GET_CONTINENTS = gql`
query Query {
  continents {
    id
    name
  }
}
`;

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

export default function NewCountry() {
    const [createCountry] = useMutation(CREATE_COUNTRY);
    const [continents, setContinents] = useState([]);
    const router = useRouter();
    const submit = async (event) => {

        const form = event.target;
        const formData = new FormData(form);

        const formDataJson = Object.fromEntries(formData.entries());

        try {



            const { data } = await createCountry({
                variables: {
                    data: {
                        code: formDataJson.code,
                        name: formDataJson.name,
                        emoji: formDataJson.emoji,
                        continent: {
                            id: parseInt(formDataJson.continent),
                        },
                    },
                },
            });


        } catch (error) {
            console.error("Error:", error);
        }
    };
    const [countries, setCountries] = useState([]);
    const { dataCountry } = useQuery(GET_ALL_COUNTRIES, {
        onCompleted: (dataCountry) => {
            setCountries(dataCountry.countries);
        },
    });


    const { loading, error, data } = useQuery(GET_CONTINENTS, {
        onCompleted: (data) => {
            setContinents(data.continents);
        },
    });

    return (
        <div className="py-5">

            <form onSubmit={submit} className="px-5 flex flex-col gap-5 items-center justify-center">
                <Input type="text" name="code" label="Code" color="secondary" className="max-w-[250px]" />
                <Input type="text" name="name" label="Name" color="secondary" className="max-w-[250px]" />
                <Input type="text" name="emoji" label="Emoji" color="secondary" className="max-w-[250px]" />
                <Select label="Select a continent" name="continent" color="secondary" className="max-w-[250px]">
                    {continents.map((continent) => (
                        <SelectItem key={continent.id} value={continent.name}>
                            {continent.name}
                        </SelectItem>
                    ))}
                </Select>
                <Button type="submit" color="primary">Create</Button>

            </form>

            <h1 className="text-4xl font-bold px-3 py-8">Country already added</h1>
            <div className="flex items-center ">
                <div className="flex flex-wrap gap-4 md:gap-10  items-center px-5">
                    {countries.map((country) => (
                        <CountryCard key={country.id} {...country} />
                    ))}
                </div>
            </div>
        </div>
    );
}