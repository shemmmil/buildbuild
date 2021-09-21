import React from "react";
import { Row, Col, Statistic as AntdStatistic } from "antd";
import { IssuesCloseOutlined, PullRequestOutlined } from "@ant-design/icons";

export type StatisticProps = {
  issues: number;
  pullRequest: number;
};

export const Statistic = ({ issues, pullRequest }: StatisticProps) => (
  <Row gutter={16}>
    <Col span={12}>
      <AntdStatistic
        title="Issues"
        value={issues}
        prefix={<IssuesCloseOutlined />}
      />
    </Col>
    <Col span={12}>
      <AntdStatistic
        title="Pull Request"
        value={pullRequest}
        prefix={<PullRequestOutlined />}
      />
    </Col>
  </Row>
);
