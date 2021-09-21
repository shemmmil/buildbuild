import { Owner, RepositoryType, Stargazers, Languages } from "../query";

type Response = { search: { edges: RepositoryType[] } };

export const normalizeResponse = (response: Response) => {
  const arrayRepos = response.search.edges;

  const result = arrayRepos.map((res: RepositoryType) => {
    const node = res.node;
    const language = getLanguage(node.languages);
    const TOTAL_LANGUAGE = node.languages.totalCount;

    return {
      name: node.name,
      owner: getOwner(node.owner),
      stars: getStarts(node.stargazers),
      description: node.description,
      language,
      TOTAL_LANGUAGE,
    };
  });
  return result;
};

const getOwner = (owner: Owner) => owner.login;

const getStarts = (stargazers: Stargazers) => stargazers.totalCount;

const getLanguage = (languages: Languages) => {
  const lang = languages.edges[0];

  if (lang?.node === undefined) return { color: "#fff", name: "" };

  const { name, color } = lang.node;

  return { name, color };
};

export const getLanguages = (languages: Languages) => {
  return languages.edges.map((language) => ({
    name: language.node.name,
    color: language.node.color,
  }));
};
