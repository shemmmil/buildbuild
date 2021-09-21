import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
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

export const GET_REPOSITORY = gql`
  query ($name: String!, $owner: String!, $total_language: Int) {
    repository(name: $name, owner: $owner) {
      name
      owner {
        login
      }
      description
      stargazers {
        totalCount
      }
      pullRequests {
        totalCount
      }
      issues {
        totalCount
      }
      languages(first: $total_language) {
        edges {
          node {
            color
            name
          }
        }
      }
    }
  }
`;

export type RepositoryType = {
  node: {
    name: string;
    owner: Owner;
    stargazers: Stargazers;
    description: string;
    languages: Languages;
  };
};

export type Owner = {
  login: string;
};

export type Stargazers = {
  totalCount: number;
};

type Language = {
  node: {
    color: string;
    name: string;
  };
};

export type Languages = {
  totalCount?: number;
  edges: Language[];
};
