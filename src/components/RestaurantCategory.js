import ItemList from "./ItemList";
// import { useState } from "react";
const RestaurantCategory = ({ data , ShowItem , setShowIndex }) => {
  
  // const [ShowItem , setShowItems ] = useState(false);

  const handleClick = () => {
      setShowIndex();
  }

  return (
    <div className="bg-gray-100 shadow-lg rounded-sm">
      <div className="my-4 p-2 flex justify-between items-center cursor-pointer" onClick={handleClick}>
        <div>
          <span className="font-bold">{data?.title}</span>
          <span className="font-bold"> ({data?.itemCards?.length})</span>
        </div>
        <div>
          <span>🔽</span>
        </div>
      </div>
      <div className="flex justify-center">
        {ShowItem && <ItemList Items={data?.itemCards}/>}
      </div>
    </div>
  );
};


export default RestaurantCategory;
