import React from "react";
import { Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./TopBar.scss";

export function TopBar() {
  const goBack = () => {
    console.log("Go back");
  };
  return (
    <div className="top-bar">
      <Icon name="angle left" className="top-bar__back" link onClick={goBack} />
      <div className="top-bar__right">
        <Link to="/profile">
          <span>username</span>
        </Link>
        <Icon name="power" onClick={() => console.log("logout")} link />
      </div>
    </div>
  );
}
