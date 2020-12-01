import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="container">
        <div className="row justify-content-between pt-3">
          <div className="col-md-6 texto-header">
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <div className="col-md-6">
            <div className="toggler">
              <p>Toggler</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
