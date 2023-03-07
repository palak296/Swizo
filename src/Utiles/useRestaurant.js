import { useState,useEffect } from "react";



      async function getRestaurants() {
        // handle the error using try... catch
         const data = await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          // updated state variable restaurants with Swiggy API data
           return json?.data?.cards[2]?.data?.data?.cards;
        //   setfilterrestaurant(json?.data?.cards[2]?.data?.data?.cards); 
      }
     


export default getRestaurants;