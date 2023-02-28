import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {isLoading ? (
          <Spinner />
        ) : (
          products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))
        )}
      </div>
    </>
  );
};

export default Category;
