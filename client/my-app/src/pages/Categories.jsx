import React, { useEffect, useState } from "react";
import { categoryService } from "../services/api";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.getAllCategories();
        setCategories(response);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Browse Categories</h2>
      <ul className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <li
            key={cat._id}
            className="bg-white p-4 shadow rounded hover:bg-gray-100 transition"
          >
            <Link
              to={`/categories/${cat.slug}`}
              className="text-blue-600 hover:underline"
            >
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
