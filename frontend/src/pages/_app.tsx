import Layout from "@/components/Layout";
import "@/styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

function App({ Component, pageProps }: AppProps) {
  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NextUIProvider>
        <Layout>

          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </ApolloProvider>
  )
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App as React.ComponentType<AppProps>), { ssr: false });
