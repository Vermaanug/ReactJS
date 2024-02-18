import { IMG_URL } from "../utilis/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, sla, avgRating } = resData?.info;

  return (
    <div className="w-[13rem] h-[22rem] m-10  p-3 border border-gray-300 shadow-lg rounded-sm transform transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer">
      <img
        className="w-full object-cover aspect-square"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3 className="py-1 text-base">{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}</h5>
      <h5>{sla?.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;
