import { useState , useEffect } from "react";
import { MENU_API } from "./constants";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {

    const [resInfo , setresInfo] = useState(null);
    // const [resMenu , setresMenu] = useState(null);
    const {resId} = useParams();


    useEffect(() => {
        fetchData();
    },[])

    async function fetchData(){
        const data = await fetch(MENU_API + resId)
        const json = await data.json();

        setresInfo(json?.data)
        // setresInfo(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card)
    }

    return resInfo;

}

export default useRestaurantMenu;