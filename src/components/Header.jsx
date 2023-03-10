import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

export const Title = () => {
  return <img className="logo ml-2.5 w-[70px]" alt="logo" src={logo} />;
};

export const NavComponent = () => {
  const cartItems = useSelector((store) => store.cart.items); //subscribed to the store. bridge between cart and store

  const [isLogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(!isLogged);

  return (
    <ul className="flex max-w-2xl items-center justify-between mt-2.5 mr-2.5">
      <li className="p-2.5 px-5 font-bold hover:text-orange-500">
        <Link to="/">
          <button className="nav--btn mob:w-12 mob:text-xs"> Home</button>
        </Link>
      </li>
      <li className="p-2.5 px-5 font-bold hover:text-orange-500">
        <Link to="/about">
          <button className="nav--btn mob:w-12 mob:text-xs"> About</button>
        </Link>
      </li>
      <li className="p-2.5 px-5 font-bold hover:text-orange-500">
        <Link to="/instamart">
          <button className="nav--btn mob:w-12 mob:text-xs">Instamart</button>
        </Link>
      </li>
      <li className="p-2.5 px-5 font-bold hover:text-orange-500">
        <Link to="/cart">
          <button className="nav--btn mob:w-12 mob:text-xs">
            Cart- <span className="text-orange-500">{cartItems.length}</span>
          </button>
        </Link>
      </li>
      <li className="p-2.5 px-5 font-bold hover:text-orange-500">
        <button
          className="nav--btn mob:w-12 mob:text-xs"
          onClick={() => {
            handleLogin();
          }}
        >
          {isLogged ? "Logout " : "Login "}
        </button>
      </li>
    </ul>
  );
};

export const HeaderComponet = () => {
  return (
    <div className="flex justify-between bg-[#FFF8E1] shadow-lg shadow-[#edd791]  top-0 left-0 w-full h-[70px]">
      <Title />
      <NavComponent />
    </div>
  );
};

export default HeaderComponet;
