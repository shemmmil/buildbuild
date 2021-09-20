import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

import { API_URI } from "./base";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        search: relayStylePagination(),
      },
    },
  },
});

export const apolloClient = new ApolloClient({
  uri: API_URI,
  cache,
  headers: {
    Authorization: `bearer ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
});
