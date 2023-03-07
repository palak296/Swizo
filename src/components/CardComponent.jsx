import { IMG_CDN_URL } from "../components/constant";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const CardComponent=({name,cuisines,cloudinaryImageId,lastMileTravelString,id,costForTwoString,avgRating})=>{
    const buttonStyle = {
        backgroundColor: avgRating == "--" ? "#fff" : parseFloat(avgRating) < 4.0 ? "#db7c38":"#48c479",
        color : isNaN(avgRating)? "#535665" : "#fff"
      }
      
    return (
       <div className=" w-1/5 basis-[300px] mob:basis-[150px] p-2 m-2  bg-[#FFF8E1] hover:outline hover:outline-[#f0e7c7] hover:shadow-2xl ">
               <img className="images " src={IMG_CDN_URL +cloudinaryImageId} alt="" />
               <Link to={"/restaurant/" +id} key={id}><h1 className="font-bold my-2">{name}</h1> </Link>
               <h3 className="font-extralight text-sm py-1 my-2">{cuisines.join(", ")}</h3>
               <div className="flex mt-4 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
          <div className="flex items-center h-5 w-11 gap-1 py-0 px-1" style={buttonStyle}>
            <AiFillStar /><span>{avgRating}</span>
          </div>
          <div>•</div>
          <div>{lastMileTravelString}</div>
          <div>•</div>
          <div>{costForTwoString}</div>
        </div>
               

           </div>
   )
}

export default CardComponent