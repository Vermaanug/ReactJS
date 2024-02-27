import { DISH_URL } from "../utilis/constants";
// import { useState } from "react";

const ItemList = ({ Items }) => {
  console.log(Items);
  // const [ShowItems  , setShowItems] = useState(false)


  return (
    <div className="w-full">
      {Items.map((item, index) => (
        <div key={index} className="border-b-2 p-3 flex justify-between">
          <div className="flex flex-col"> 
            <span className="text-lg font-semibold px-2 py-1 ">{item?.card?.info?.name}</span>
            <span className="px-2 font-semibold text-sm"> ₹ {item?.card?.info?.price / 100  || item?.card?.info?.defaultPrice / 100}</span>
            <span className="px-2 text-sm text-wrap">{item?.card?.info?.description}</span>
          </div>
          <img className="w-24 h-24 object-cover border rounded-lg shadow-md" src={DISH_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
