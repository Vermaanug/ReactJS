import { DISH_URL } from "../utilis/constants";
import Shimmeer from "./Shimmer";
import useRestaurantMenu from "../utilis/useRestaurantMenu";

const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();
  const resMenu = resInfo;

  if (resInfo == null) return <Shimmeer />;

  const { name, locality, areaName, cuisines } =
    resMenu?.cards[2]?.card?.card?.info;

  const menuItems =
    resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel ;

  console.log(menuItems)
  

  return (
    <div className="res-info-container">
      <div className="res-info">
        <h1>{name}</h1>
        <p>{cuisines[0]}</p>
        <p>
          {locality}, {areaName}
        </p>
      </div>
      {menuItems?.map((item) => {
        const { name, price ,imageId , id} = item?.card?.info || item?.dish?.info;
        return (
          <div key={id} className="menu-info"> 
            <h5>{name}</h5>
            <h5>{price}</h5>
            <img src={DISH_URL + imageId}/>
        </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
