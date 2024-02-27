import { DISH_URL } from "../utilis/constants";
import Shimmeer from "./Shimmer";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();
  const resMenu = resInfo;

  const [ShowIndex, setShowIndex] = useState(false);

  if (resInfo == null) return <Shimmeer />;

  const { name, locality, areaName, cuisines } =
    resMenu?.cards[2]?.card?.card?.info;

  const menuItems =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  // const menuItems =
  //     resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //       ?.itemCards || resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel ;

  const Categories =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(Categories)

  return (
    <div className="w-6/12 mx-auto my-5 p-3">
      <div className="border-b-2 border-gray-350 p-2">
        <h1 className="text-3xl text-bold py-2">{name}</h1>
        <p className="text-sm">{cuisines[0]}</p>
        <p className="text-sm mb-1">
          {locality}, {areaName}
        </p>
      </div>
      {Categories.map((Category, index) => {
        return (
          <RestaurantCategory
            key={index}
            data={Category?.card?.card}
            ShowItem={index === ShowIndex ? true : false}
            setShowIndex = {() => {setShowIndex(index)}}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
