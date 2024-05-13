import { Country } from "@/types";
import { gql, useQuery } from "@apollo/client";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";



export default function CountryCard(countries: Country) {
    const router = useRouter();
    return (
        <Link href={`/country/${countries.code}`}>
            <Card shadow='sm' className=" w-[40vw] md:w-[25vw] " >
                <CardHeader className="flex items-center justify-center">
                    <h1 className="text-default font-bold">{countries.name}</h1>

                </CardHeader>
                <CardBody className="flex items-center justify-center">
                    <p className="text-6xl">{countries.emoji}</p>
                </CardBody>
            </Card>
        </Link>

    )
}