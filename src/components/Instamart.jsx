import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Section = ({ title, text }) => {
  const [isvisible, setisvisible] = useState(false);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-5 px-3">
      <div className="border border-gray-300 p-5 rounded-md shadow-md">
        <h1 className="font-bold text-lg mb-3 text-center">{title}</h1>
        {!isvisible ? (
          <button
            className="flex items-center justify-center w-full text-gray-600 hover:text-gray-900 transition duration-300"
            onClick={() => {
              setisvisible(true);
            }}
          >
            <FaAngleDown className="mr-2" />
            Show
          </button>
        ) : (
          <>
            <button
              className="flex items-center justify-center w-full text-gray-600 hover:text-gray-900 transition duration-300"
              onClick={() => {
                setisvisible(false);
              }}
            >
              <FaAngleUp className="mr-2" />
              Hide
            </button>
            <p className="mt-3">{isvisible ? text : ""}</p>
          </>
        )}
      </div>
    </div>
  );
};

const InstaMart = () => {
  return (
    <div className="bg-[#FFF8E1] py-10">
      <div className="max-w-screen-xl mx-auto px-5">
        <h1 className="text-3xl font-bold mb-5 text-center">
          Welcome to InstaMart
        </h1>
        <div className="flex flex-wrap -mx-3">
          <Section
            title="About"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor, nibh nec malesuada molestie, velit libero rutrum nunc, ut semper eros nunc eget enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam dignissim magna vel eros sodales consectetur. Nulla vel eleifend lorem. "
          />
          <Section
            title="Careers"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor, nibh nec malesuada molestie, velit libero rutrum nunc, ut semper eros nunc eget enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam dignissim magna vel eros sodales consectetur. Nulla vel eleifend lorem. "
          />
          <Section
            title="Contact Us"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor, nibh nec malesuada molestie, velit libero rutrum nunc, ut semper eros nunc eget enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis e"
          />
        </div>
      </div>
    </div>
  );
};
export default InstaMart;
