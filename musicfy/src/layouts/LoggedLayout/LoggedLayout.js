import React from "react";
import "./LoggedLayout.scss";
import { LeftMenu } from "../../Components/Layout/LeftMenu";
import { TopBar } from "../../Components/Layout/TopBar/TopBar";

export function LoggedLayout(props) {
  const { children } = props;
  return (
    <div className="logged-layout">
      <div className="logged-layout__content">
        <div className="logged-layout__left-menu">
          <LeftMenu />
        </div>
        <div className="logged-layout__children-content">
          <div className="logged-layout__top-bar">
            <TopBar />
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div className="logged-layout__footer">
        <p>footer</p>
      </div>
    </div>
  );
}