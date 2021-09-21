import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Card, List, Space } from "antd";
import { useParams } from "react-router-dom";

import { GET_REPOSITORY } from "../../query";
// @ts-ignore
import { Spinner, Stars } from "@components";
import { getLanguages } from "../../helpers/normalizeResponse";
import { Statistic } from "./components";

export const RepositoryPage = () => {
  const { slug }: { slug: string } = useParams();
  const [owner, name, totalLanguage] = parseSlug(slug);

  const { loading, error, data } = useQuery(GET_REPOSITORY, {
    variables: { name, owner, total_language: parseInt(totalLanguage) },
  });

  if (loading) return <Spinner />;
  if (error) return <h1>Error</h1>;

  const { repository } = data;

  const description = repository.description;

  const languages = repository.languages;

  const stars = repository.stargazers.totalCount;

  const issuesCount = repository.issues.totalCount;
  const prCount = repository.pullRequests.totalCount;

  const languageList = getLanguages(languages);
  console.log(repository);
  return (
    <main>
      <Card title={`${owner}/${name}`}>
        <Space direction="vertical" size="large">
          <Statistic issues={issuesCount} pullRequest={prCount} />
          <section>{description}</section>
          <footer>
            <Stars count={stars} />
          </footer>
          <List
            itemLayout="horizontal"
            dataSource={languageList}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <div
                      className="shape"
                      style={{ backgroundColor: item.color }}
                    />
                  }
                  title={<a href="#">{item.name}</a>}
                />
              </List.Item>
            )}
          />
        </Space>
      </Card>
    </main>
  );
};

function parseSlug(slug: string) {
  return slug.split("-");
}
