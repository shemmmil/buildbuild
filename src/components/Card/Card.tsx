import React from "react";
import { Stars } from "../Stars";

export type CardProps = {
  owner: string;
  name: string;
  description: string;
  stars: number;
  language: {
    color: string;
    name: string;
  };
};

export const Card = ({
  owner,
  name,
  description,
  stars,
  language,
}: CardProps) => {
  return (
    <li>
      <div className="repository-title">
        <a href="#">
          {owner}/<strong>{name}</strong>
        </a>
      </div>
      <p>{description}</p>
      <div className="statistic">
        <Stars count={stars} />
        <div className="language">
          <span className="shape" style={{ backgroundColor: language.color }} />
          <span>{language.name}</span>
        </div>
      </div>
    </li>
  );
};
