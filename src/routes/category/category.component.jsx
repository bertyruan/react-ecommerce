import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategories } from "../../store/categories/categories.selector";

import "./category.styles.scss";

const Category = () => {
  console.log("render/rerender");
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState(categories[category]);
  useEffect(() => {
    console.log("effect fired updating state");
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </>
  );
};

export default Category;
