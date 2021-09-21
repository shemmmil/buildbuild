import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { Row, Col } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { apolloClient } from "./config/apollo.client";
import { RepositoryPage } from "./pages";
import { Header } from "@components";
import "./App.css";
import { MainPage } from "./pages";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Row>
          <Col span={12} offset={6}>
            <Header />
            <Switch>
              <Route exact path="/">
                <MainPage
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                />
              </Route>
              <Route path="/repository/:slug" component={RepositoryPage} />
            </Switch>
          </Col>
        </Row>
      </Router>
    </ApolloProvider>
  );
}

export default App;
