import { LOGO_URL } from "../utilis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const btnName = "Login";

  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Browse</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
