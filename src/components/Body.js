import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listofRestaurant , setListOfRestaurant] = useState([
    {
      id: "1",
      restaurantname: "Dominios",
      cusisine: "Pizza , Italian",
      avgrating: "4.3",
      minDeliverytime: "40",
    },
    {
      id: "2",
      restaurantname: "KFC",
      cusisine: "Burger , Italian",
      avgrating: "4.2",
      minDeliverytime: "30",
    },
    {
      id: "3",
      restaurantname: "Garam Masala",
      cusisine: "Food , Indian",
      avgrating: "3.9",
      minDeliverytime: "40",
    },
    {
      id: "4",
      restaurantname: "CSB",
      cusisine: "Chai , Indian",
      avgrating: "4.4",
      minDeliverytime: "10",
    },
  ]);

  return (
    <div className="body">
      <div className="fliter">
        <button
          className="fliter-btn"
          onClick={() => {
            const fliterlist = listofRestaurant.filter(
              (res) => res.avgrating > 4
            );
            setListOfRestaurant(fliterlist);
          }}
        >
          Top Rated Restaurant{" "}
        </button>
      </div>
      <div className="res-container">
        {listofRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
