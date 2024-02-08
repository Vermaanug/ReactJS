import { useEffect, useState } from "react";
import { DISH_URL } from "../utilis/constants";
import Shimmeer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const [resMenu, setresMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1725542&lng=72.942537&restaurantId=16753&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setresInfo(json?.data?.cards[2]?.card);
    setresMenu(
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    );
    console.log(resMenu)
  };

  const { name, locality, areaName, cuisines } = resInfo?.card?.info;

  const menuItems = resMenu?.itemCards;

  return resInfo === null ? (
    <Shimmeer />
  ) : (
    <div className="res-info-container">
      <div className="res-info">
        <h1>{name}</h1>
        <p>
          {cuisines[0]}, {cuisines[1]}
        </p>
        <p>
          {locality}, {areaName}
        </p>
      </div>
      <div className="menu-items">
        {menuItems.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="menu-info">
                <h3>{item?.card?.info?.name}</h3>
                <p>Rs {item?.card?.info?.price / 100}</p>
              </div>
              <div className="menu-img">
                <img src={DISH_URL + item?.card?.info?.imageId} alt="Dish" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;