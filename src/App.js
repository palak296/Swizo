import React from "react";
import reactDom from "react-dom/client";
import Body from "./components/Body";
import HeaderComponet from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/About"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const root = reactDom.createRoot(document.getElementById("root"));
import InstaMart from "./components/Instamart";
import store from "./Utiles/store";
import { Provider } from "react-redux";
import { Footer } from "./components/Footer";
const AppLayout = ()=>{

    return (
        <>
            <Provider store={store}>
              <div className="bg-[#FFF8E1] w-screen md:h-full ">
              <HeaderComponet/>
              <Outlet/> 
              <Footer/>
              </div>
            </Provider>
            
                      
        </>
    )
}
const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu/>
        },
        {
          path: "/instamart",
          element: <InstaMart/>
        }
        
      ],
    },  
    
  ]);
  root.render(<RouterProvider router={appRouter} />);