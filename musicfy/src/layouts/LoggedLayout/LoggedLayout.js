import React from "react";
import "./LoggedLayout.scss";

export function LoggedLayout(props) {
  const { children } = props;
  return (
    <div className="logged-layout">
      <div className="logged-layout__content">
        <div className="logged-layout__left-menu">
          <p>left menu</p>
        </div>
        <div className="logged-layout__children-content">
          <div className="logged-layout__top-bar">
            <p>top bar</p>
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
