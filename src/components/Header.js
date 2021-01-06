import React from "react";

const Header = function () {
  return (
    <div className="header">
      <div className="inner_header">
        <div className="logo_container">
          <img alt="logo" src="icon.png" />
          <h1>
            Film<span>Search</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
