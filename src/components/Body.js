import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmeer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
const Body = () => {
  const [listofRestaurant, setListOfRestaurant] = useState([]);

  const [filterRestaurant, setfilterRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1909566&lng=72.9788257"
    );

    const json = await data.json();


    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // console.log(listofRestaurant)
  };

  const status = useOnlineStatus();
  // console.log(listofRestaurant)

  if (status === false) return (<h1> Check your internet connection </h1>);

  //Conditional Rendering
  // if(listofRestaurant.length === 0){
  //   return <h2>Loading</h2>
  // }
  // console.log("Body Render");
  // console.log(listofRestaurant)

  return listofRestaurant.length === 0 ? (
    <Shimmeer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="flex px-6 my-6">
          <input
            type="text"
            className=" flex border border-black px-2 rounded-sm outline-none bg-[#f7f7f7] "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="ml-4 py-1 px-3 bg-green-600 cursor-pointer rounded-sm text-base"
            onClick={() => {
              const fliter = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilterRestaurant(fliter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border px-3 my-6 shadow-lg rounded text-base"
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
      <div className="flex flex-wrap justify-center p-3">
        {filterRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? <RestaurantCardPromoted  resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
