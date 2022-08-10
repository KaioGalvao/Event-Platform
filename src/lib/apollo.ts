import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl6idwwsp4oqu01uq9h658oij/master',
    cache: new InMemoryCache()
})