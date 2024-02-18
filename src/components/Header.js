import { LOGO_URL } from "../utilis/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // const btnName = "Login";

  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="flex justify-around p-4 shadow-lg font-mono">
      <div className="">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="m-4">
        <ul className="flex items-center">
          <li className="px-7">
            <Link to="/">Home</Link>
          </li>
          <li className="px-7">
            <Link>Browse</Link>
          </li>
          <li className="px-7">
            <Link to="/about">About US</Link>
          </li>
          <li className="pl-6 pr-9">
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="px-6 py-1 bg-blue-500 rounded-sm" 
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
