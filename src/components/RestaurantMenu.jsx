import { useParams } from "react-router-dom"

import { IMG_CDN_URL } from "./constant";
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../Utiles/useRestaurantInfo";
const RestaurantMenu = () => {
    const {resId}=useParams();
    
    const restaurant = useRestaurantInfo(resId);
    console.log(restaurant)
    
    return (!restaurant)? <Shimmer/>:(
        <div className="menu">
        <div >
        <h1>
            restraunt id: {resId}
        </h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
        </div>
        <div >
            <h1>Menu</h1>
            
            <ul>{
            Object.values(restaurant?.menu?.items).map((item)=>(
<li key={item.id}>{item.name}</li>
            ))}</ul>
        </div>

        </div>
    )
 }
export default RestaurantMenu