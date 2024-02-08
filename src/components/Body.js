import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmeer from "./Shimmer";

const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);

  const [filterRestaurant, setfilterRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.1725542&lng=72.942537"
    );

    const json = await data.json();


    setListOfRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setfilterRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

    // console.log(listofRestaurant)

  };

  //Conditional Rendering
  // if(listofRestaurant.length === 0){
  //   return <h2>Loading</h2>
  // }
  console.log("Body Render");
  // console.log(listofRestaurant)
  

  return  listofRestaurant.length === 0 ? <Shimmeer/> : (
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
                res.info.name
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
              (res) => res.info.avgRating > 4.4
            );
            setfilterRestaurant(fliterlist);
          }}
        >
          Top Rated Restaurant{" "}
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
