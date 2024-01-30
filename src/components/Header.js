import { LOGO_URL } from "../utilis/constants";
import { useState } from "react";

const Header = () => {

    // const btnName = "Login";

    const [btnName , setbtnName] = useState("Login");
    
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>Browse</li>
            <li>About US</li>
            <li>Contact</li>
            <button className="login-btn" onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;