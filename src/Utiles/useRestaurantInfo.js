import { useEffect, useState } from "react";
const useRestaurantInfo = (resId)=>{
    const [restaurant,setRestaurant]=useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[])
    async function getRestaurantInfo(){
        const data=await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=21.1702401&lng=72.83106070000001&menuId="
        +resId)
        const json= await data.json();
        setRestaurant(json.data);
        
    }
    return restaurant;
}

export default useRestaurantInfo;