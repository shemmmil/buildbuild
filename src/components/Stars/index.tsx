import { StarOutlined } from "@ant-design/icons";
import React from "react";
import { kFormatter } from "../../helpers/kFormatter";

export type StarsProps = {
  count: number;
};

export const Stars = ({ count }: StarsProps) => {
  const formattingCount = kFormatter(count);
  return (
    <div className="stars">
      <StarOutlined />
      {formattingCount}
    </div>
  );
};
