import React, { useContext } from 'react';
import { AppContext } from '../context/App_Context';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isAuthenticated, logOut } = useContext(AppContext);

  const handleLogout = () => {
    // Call logOut function from context
    logOut();
  };

  return (
    <div className="nav bg-dark">
      <div className="left">
        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
          <h3>MERN RECIPE</h3>
        </Link>
      </div>
      <div className="right">
        {isAuthenticated ? (
          <>
            <Link to={"/add"} className="btn btn-info mx-2">
              Add
            </Link>
            <Link to={"/profile"} className="btn btn-warning mx-2">
              Profile
            </Link>
            <button className="btn btn-danger mx-2" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"} className="btn btn-primary mx-2">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-warning mx-2">
              Register
            </Link>
          </>
        )}
        <Link to={"/saved"} className="btn btn-light mx-2">
          Saved
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
