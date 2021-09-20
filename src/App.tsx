import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { Row, Col } from "antd";

import { RepositoryList } from "./RepositoryList";
import { SearchBar } from "./SearchBar";
import "./App.css";
import { apolloClient } from "./config/apollo.client";

function App() {
  const [value, setValue] = useState("");

  return (
    <ApolloProvider client={apolloClient}>
      <Row>
        <Col span={12} offset={6}>
          <header>
            <h1>Search RepositoryList</h1>
            <SearchBar value={value} onChange={setValue} />
          </header>
          <RepositoryList search={value} />
        </Col>
      </Row>
    </ApolloProvider>
  );
}

export default App;
