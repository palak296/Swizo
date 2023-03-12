import { useDispatch } from "react-redux";
import { ITEM_IMG_CDN } from "./constant";
import { removeItem } from "../Utiles/cartSlice";

const FoodItem = ({ id, name, price, description, cloudinaryImageId }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <div
      className="flex justify-between basis-[848px] max-h-[250px] p-5 border-b border-gray"
      key={id}
    >
      <div className="flex flex-col basis-[400px]">
        <h3 className="font-bold text-lg w-3/5">{name}</h3>
        <p className="mt-1 text-base font-normal">
          {price > 0
            ? new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(price / 100)
            : " "}{" "}
        </p>
        <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden ">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
        {cloudinaryImageId && (
          <img
            className="w-[118px] h-[96px]"
            src={ITEM_IMG_CDN + cloudinaryImageId}
            alt={name}
          />
        )}
        <button
          className="btn btn--primary w-[118px] h-[34px] mt-2.5 bg-red-500"
          onClick={handleRemoveItem}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
