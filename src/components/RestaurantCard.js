const RestaurantCard = ({resData}) => {


    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
        />
        <h3>{resData.restaurantname}</h3>
        <h5>{resData.cusisine}</h5>
        <h5>{resData.avgrating}</h5>
        <h5>{resData.minDeliverytime} minutes</h5>
      </div>
    );
  };

export default RestaurantCard;