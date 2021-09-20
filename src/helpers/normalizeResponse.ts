import { Owner, RepositoryType, Stargazers, Languages } from "../query";
import { kFormatter } from "./kFormatter";

export const normalizeResponse = (response) => {
  const arrayRepos = response.search.edges;

  const result = arrayRepos.map((res: RepositoryType) => {
    const node = res.node;
    const language = getLanguage(node.languages);

    return {
      name: node.name,
      owner: getOwner(node.owner),
      stars: kFormatter(getStarts(node.stargazers)),
      description: node.description,
      language,
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
