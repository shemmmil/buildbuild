import React from "react";
import { Input } from "antd";

const { Search } = Input;

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Search placeholder="repository" onChange={onSearchChange} enterButton />
  );
};
