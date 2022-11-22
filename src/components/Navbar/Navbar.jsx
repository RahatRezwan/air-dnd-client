import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   const [openMoblieMenu, setOpenMobileMenu] = useState(false);
   return (
      <div className="border-b">
         <div className="max-w-screen-xxl w-[95%] flex justify-between items-center py-3 mx-auto">
            <div>
               <Link to="/">Airdnd</Link>
            </div>
            <ul className="hidden lg:flex flex-row gap-2 uppercase text-sm text-white font-bold">
               <li>
                  <Link to="/login" className="bg-green-400 p-2 rounded-full">
                     Login
                  </Link>
               </li>
               <li>
                  <Link to="/register" className="bg-green-400 p-2 rounded-full">
                     Signup
                  </Link>
               </li>
            </ul>
            <div
               onClick={() => setOpenMobileMenu((prev) => !prev)}
               className="border rounded-md p-1 lg:hidden"
            >
               menu toggle
            </div>
         </div>

         {/* Mobile menu */}
         <ul
            className={`flex flex-col gap-4 justify-center items-center uppercase text-sm text-white font-bold p-5 border rounded w-[250px] lg:hidden absolute top-[%] right-[2.5%] ${
               openMoblieMenu ? "scale-in-center" : "scale-out-center"
            }`}
         >
            <li>
               <Link to="/login" className="bg-green-400 p-2 rounded-full">
                  Login
               </Link>
            </li>
            <li>
               <Link to="/register" className="bg-green-400 p-2 rounded-full">
                  Signup
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
