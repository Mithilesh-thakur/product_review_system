import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleAddProduct = () => {
    axios
      .post("http://localhost:5000/api/products", newProduct)
      .then((response) => {
        setNewProduct({ name: "", description: "", image: "" });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
   
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
      <div className="mt-10 text-center font-bold">Books</div>
      <div className="mt-3 text-center text-4xl font-bold">Add a New Product</div>
      <div className="p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddProduct(newProduct);
            setNewProduct({ name: "", description: "", image: "" });
          }}
        >
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Book name *"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              required
            />
            <input
              type="text"
              name="description"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Description *"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              required
            />
          </div>
          <div className="my-6 flex gap-4">
            <input
              type="text"
              name="image"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Image URL *"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              required
            />
          </div>
          <div className="text-center">
            <button
              className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
              type="submit"
            >
              Add Books
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link
            to="/products"
            className="text-blue-500 underline"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddProduct;
