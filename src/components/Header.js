import { LOGO_URL } from "../utilis/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

export default Header;