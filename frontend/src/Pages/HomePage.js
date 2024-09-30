import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      
      <section className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Welcome to the</span>
                  <span className="block text-indigo-600 xl:inline">
                  Product Review Platform
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It's never been easier to build beautiful websites that convey your message and tell your story.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <Link
              to="/products"
              className="inline-flex items-center px-4 py-2 text-lg text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              View Products
            </Link>
            <Link
              to="/add-product"
              className="inline-flex items-center px-4 py-2 text-lg text-white bg-gray-500 rounded-md hover:bg-gray-600"
            >
              Add a New Product
            </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Useful Tools"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Review Section */}
      
    </div>
  );
};

export default HomePage;
