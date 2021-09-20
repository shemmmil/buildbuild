import React from "react";
import { StarOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

export const Card = ({ owner, name, description, stars, language }) => {
  return (
    <li>
      <div className="repository-title">
        <a href="#">
          {owner}/<strong>{name}</strong>
        </a>
      </div>
      <p>{description}</p>
      <div className="statistic">
        <div className="stars">
          <StarOutlined />
          {stars}
        </div>
        <div className="language">
          <span className="shape" style={{ backgroundColor: language.color }} />
          <span>{language.name}</span>
        </div>
      </div>
    </li>
  );
};
