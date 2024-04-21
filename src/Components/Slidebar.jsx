import React from "react";
import { Link } from "react-router-dom";
import cgLogo from "../img/cglogo.png";



const Sidebar = ({name}) => {
  return (
    <>
      <div className="row m-1">
        <img src={cgLogo} alt="logo" />
        {/* <h3>{name}</h3> */}
      </div>
      <div className="row p-2">
        <div className="card mt-2  p-1 text-center btnhover">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h5>All Policy</h5>
          </Link>
        </div>
        <div className="card mt-2  p-1 text-center btnhover">
          <Link
            to="/SearchPolicy"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h5>Search Policy</h5>
          </Link>
        </div>
        <div className="card mt-2  p-1 text-center btnhover">
          <Link
            to="/lastfivepolicy"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h5>Last 5 Txns</h5>
          </Link>
        </div>

        <div className="card mt-2 p-1 text-center btnhover">
        <Link
            to="/Statistics"
            style={{ textDecoration: "none", color: "inherit" }}
          >
          <h5>Statistics</h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;