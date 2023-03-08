import CardComponent from "./CardComponent";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterdata } from "../Utiles/Helper";

const Body = () => {
  const [restaurant, setrestaurant] = useState([]);
  const [filterrestaurant, setfilterrestaurant] = useState([]);
  const [searchtext, setsearchtext] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data

  async function getRestaurants() {
    // handle the error using try... catch
    const data = await fetch(
      "https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // updated state variable restaurants with Swiggy API data
    setrestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setfilterrestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  const searchData = (searchtext, restaurant) => {
    if (searchtext !== "") {
      const data = filterdata(searchtext, restaurant);
      setfilterrestaurant(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchtext}"`
        );
      }
    } else {
      setErrorMessage("");
      setfilterrestaurant(restaurant);
    }
  };
  if (!restaurant) return null;

  return (
    <div className="container">
      <div className="flex justify-center mob:flex-col">
        <div className="w-1/2 px-4 relative search-container flex justify-center  bg-[#FFF8E1] ] pt-20 my-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-20 bottom-0 w-6 h-6 my-auto text-gray-400 left-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            placeholder=" search for restaurants and food   "
            value={searchtext}
            onChange={(e) => {
              searchData(e.target.value, restaurant);

              setsearchtext(e.target.value);
            }}
          />
          <button
            className="search-btn p-2 m-2  bg-green-900 hover:bg-yellow-700 text-white rounded-md"
            onClick={() => {
              searchData(searchtext, restaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {restaurant?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=" flex flex-wrap gap-5 justify-center ">
          {filterrestaurant.map((restaurant) => {
            return <CardComponent {...restaurant.data} />;
          })}
          ,
        </div>
      )}
    </div>
  );
};

export default Body;
