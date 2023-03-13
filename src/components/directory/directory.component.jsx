import React from "react";
import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss";
const Directory = ({categories}) => {

  return (
    <div className="ditectory-container">
      {categories.map((category) => (
        <CategoryItem id={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
