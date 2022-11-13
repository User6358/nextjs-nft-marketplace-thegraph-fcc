import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
// New import
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
require("dotenv").config()

const subgraphUri = process.env.subgraphUri

// Define client to access subgraph
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: subgraphUri,
})

// Add ApolloProvider tag and use client defined above
function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
        </div>
    )
}

export default MyApp
