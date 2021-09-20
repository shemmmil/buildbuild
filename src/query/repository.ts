import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
  query ($cursor: String, $search_term: String!) {
    search(query: $search_term, type: REPOSITORY, first: 20, after: $cursor) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Repository {
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
            description
            languages(first: 1) {
              totalCount
              edges {
                node {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
