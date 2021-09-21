import { GithubOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Header = () => (
  <header className="header">
    <div className="header-logotype">
      <Link to="/" className="header-link">
        <GithubOutlined className="header-icon" />
        Beautifulhub
      </Link>
    </div>
    <div className="box-layout">
      <div className="box box-animation-1"></div>
      <div className="box box-animation-2"></div>
      <div className="box box-animation-3"></div>
      <div className="box box-animation-4"></div>
    </div>
  </header>
);
