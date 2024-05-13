import Head from "next/head";
import { ReactNode, useContext, useEffect } from "react";
import CustomNavbar from "./customnavbar";
import BigFooter from "./BigFooter";
import { gql, useQuery } from "@apollo/client";
import { AuthContext } from "@/contexts/authContext";
import { User } from "@/types/user";
import Header from "./Header";




export default function Layout({ children }: { children: ReactNode }) {

    return (
        <>
            <Head>
                <title>Checkpoint Front</title>
                <meta name="" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
            </Head>
            <Header />
            <main >{children}</main>

        </>
    );
}
