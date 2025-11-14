import React from "react";
import { Link } from "react-router";
import delivery from "./delivery.jpg"


function Hero () {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16 bg-white dark:bg-gray-900"
    >
      {/* Image */}
      
      <div
        className="w-full lg:w-1/2 h-64 sm:h-80 md:h-[400px] bg-cover bg-center rounded-lg shadow-lg relative max-sm:mb-6"
        style={{
          backgroundImage:
          `url(${delivery})` 

        }}
      >

        {/* Shopping button to be added */}
    {/*   <div className="absolute top-10/10 py-2 ">
         <Link to="/http://127.0.0.1:5501/amazon.html">
          <button   className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold
              transition-all duration-800
              animate-[grow_3s_ease-in-out_infinite] hover:bg-green-700">
          
            Shop now
          </button>
         </Link>
      </div>
         */}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-5 text-left max-w-xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
         Empowering Suppliers to Directly Reach <span className="text-blue-400">Supplify</span> Procurement team. 
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
          Partner with <span className="text-blue-400">Supplify</span> procurement — connect your products with our buyers
          easily.
        </p>
        <div className="flex flex-wrap gap-2"> 
       <Link to="/CreateAccount">
          <button   className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold
              transition-all duration-300 
              animate-[grow_2s_ease-in-out_infinite] hover:bg-blue-700">
          
            Supply now
          </button>
       </Link>
       
       </div>
      </div>
    </section>
  );
};
export default Hero