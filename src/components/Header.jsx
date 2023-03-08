import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import login from "../assets/login.png";
import { useSelector } from "react-redux";

const title = (
  <a href="/">
    <img className="logo h-12 my-4 px-6" src={logo} alt="logo" />
  </a>
);
// testing

const HeaderComponet = () => {
  const cartItems = useSelector((store) => store.cart.items); //subscribed to the store. bridge between cart and store
  //trying to make a pull request
  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);
  return (
    <div className=" ">
      <div className="header flex justify-between bg-[#FFF8E1]  shadow-lg shadow-[#edd791] items-center ">
        {title}
        <div className="nav">
          <ul className="flex">
            <li className="px-5 font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="px-5 font-bold">
              <Link to="/about">About</Link>
            </li>
            <li className="px-5 font-bold">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-5 font-bold">Cart-{cartItems.length} items</li>
            <li className="px-5 font-bold">
              {" "}
              <button onClick={handleLogin}>
                {isLogged ? "Logout" : "Login"}
              </button>
            </li>
            <li className="px-5 font-bold">
              <Link to="/instamart">InstaMart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponet;
