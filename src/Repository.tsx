import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useDebounce } from "use-debounce";
import { Divider, Button } from "antd";

import { GET_REPOSITORIES } from "./query";
import { normalizeResponse } from "./helpers/normalizeResponse";
import { Card } from "./components/Card";
import { Spinner } from "./components/Spinner";

type RepositoryListProps = {
  search: string;
};

export const RepositoryList = ({ search }: RepositoryListProps) => {
  const ONE_SECOND = 1000;
  const [debouncedSearch] = useDebounce(search, ONE_SECOND);

  const { loading, error, data, fetchMore, refetch } = useQuery(
    GET_REPOSITORIES,
    {
      variables: { search_term: debouncedSearch },
    }
  );

  useEffect(() => {
    refetch();
  }, [debouncedSearch]);

  if (loading) return <Spinner />;

  if (error) return <h1>Error</h1>;

  const normalize = normalizeResponse(data);

  const pageInfo = data.search.pageInfo;

  return (
    <>
      <ul className="repository-list">
        {normalize.map((repo) => (
          <Link
            to={`repository/${repo.owner}-${repo.name}-${repo.TOTAL_LANGUAGE}`}
            style={{ color: "inherit" }}
          >
            <Divider type="horizontal" />
            <Card
              owner={repo.owner}
              name={repo.name}
              description={repo.description}
              stars={repo.stars}
              language={repo.language}
            />
          </Link>
        ))}
      </ul>
      {normalize.length > 0 && (
        <div className="button-load">
          <Button
            type="primary"
            onClick={() => {
              if (pageInfo.hasNextPage) {
                fetchMore({
                  variables: {
                    cursor: pageInfo.endCursor,
                  },
                });
              }
            }}
          >
            Load more
          </Button>
        </div>
      )}
    </>
  );
};
