import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([
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

  const [filterRestaurant, setfilterRestaurant] = useState([
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

  const [searchText, setsearchText] = useState("");
  //Conditional Rendering
  // if(listofRestaurant.length === 0){
  //   return <h2>Loading</h2>
  // }
  console.log("Body Render");

  return (
    <div className="body">
      <div className="fliter">
        <div className="Search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const fliter = listofRestaurant.filter((res) =>
                res.restaurantname
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setfilterRestaurant(fliter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="fliter-btn"
          onClick={() => {
            const fliterlist = listofRestaurant.filter(
              (res) => res.avgrating > 4
            );
            setfilterRestaurant(fliterlist);
          }}
        >
          Top Rated Restaurant{" "}
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
