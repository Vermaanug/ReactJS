import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
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

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
      />
      <h3>{props.resName}</h3>
      <h5>{props.cuisine}</h5>
      <h5>{props.rating}</h5>
      <h5>40 minutes</h5>
    </div>
  );
};

const Body = () => { 
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Food"
          cuisine="Biryani , North Indian"
          rating="4.3 Stars"
        />
        <RestaurantCard
          resName="KFC Fast Food"
          cuisine="Check Burger , Indian"
          rating="4.4 Stars"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
