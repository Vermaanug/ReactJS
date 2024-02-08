import { IMG_URL } from "../utilis/constants";

const RestaurantCard = (props) => {

    const {resData} = props ;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      sla,
      avgRating,
    } = resData?.info;

    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={IMG_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{sla?.deliveryTime} minutes</h5>
      </div>
    );
  };

export default RestaurantCard;