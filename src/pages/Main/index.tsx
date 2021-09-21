import React, { Dispatch, SetStateAction } from "react";

import { RepositoryList } from "../../Repository";
import { SearchBar } from "../../SearchBar";

export type MainPageProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
export const MainPage = ({ searchTerm, setSearchTerm }: MainPageProps) => {
  return (
    <main>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <RepositoryList search={searchTerm} />
    </main>
  );
};
